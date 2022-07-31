# An Angular Reactive Form Component Approach

An experimental code repository to showcase an approach to map reactive form elements to a component tree in a way that is clean and easy to maintain.  

## Thoughts
Time and time again, I see complex angular reactive forms and components involved become an explosion of bloated form interactions and fine grained implementation details.  These forms are difficult to reason with and tough to maintain.  This repository aims to share a pattern with some utility code to hopefully help make things a bit easier for some projects.

## The Approach
The general approach is to build a component structure that maps to the shape of the reactive form.  At the top, you have a FormGroup and a component that hosts it.  From this top component, you pass the forms child FormGroups, FormArrays or even FormControls to corresponding child components.  

The goal is that each component is responsible for the interactions needed for a small slice of the form. This keeps code focused on just that part of the form and maked things much easier to manage. 

Something to bear in mind is that this essentially distributes the "state" of the form into the component structure.  So changes to child form elements hosted in child components will propagate and mutate the root form group.  This has never been an issue for me, in fact, it's convenient and has worked very well on some pretty complex and highly dynamic forms.

Because each component receives just a slice of the form, it makes those components independently testable and (theoretically) easier for multiple engineers to work in parallel to develop a single logical form. 

## Tips
- Create a form -- use services and function libraries to centralize form building, data extraction and validation.
  - This keeps the form code tucked away and out of your component where things can get mixed up with other interactions
  - The only form building activities in a component will be in situations like adding or removing items from a FormArray, for example.
- The top level FormGroup is placed in the top level component where your form tag lives
- Pass a child FormGroup, FormArray or FormControl to a child component to form a tree of components that match your form structure
    -  I would strongly avoid passing more than one AbstractControl to a form.  The component should do one thing well.
    -  The more you break it up, the more lightweight and easy to test the components will be
- Optionally (encouraged), inherit components from BaseFormGroupComponent or BaseFormArrayComponent to enhance your components with generalized utility methods for common form interactions / behavior
- Alternatively, use form helper functions directly or for special situations
