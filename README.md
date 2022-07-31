# An Angular Reactive Form Component Approach

An experimental project with to come up with a clean way of mapping reactive forms elements to a component tree in a clean easy to maintain way.  

## Thoughts
Time and time again, I see complex angular reactive forms and components involved become an explosion of bloated form interactions and fine grained implementation details.  These forms are hard to maintain and difficult to reason with and can be a nightmare to deal with.  This experiment aims to come up with a pattern and utility code to help make things a bit easier.

## The Approach
The general approach is to build a component structure that maps to the shape of the reactive form.  At the top, you have a FormGroup and a component that hosts it.  From this top component, you pass the forms child FormGroups, FormArrays or even FormControls to corresponding child components.  

The goal is that each component is responsible for the interactions needed for a small slice of the form. This keeps code focused on just that part of the form and maked things much easier to manage. 

Something to bear in mind is that this essentially distributes the "state" of the form into the component structure.  So changes to child form elements hosted in child components will propagate and mutate the root form group.  This has never been an issue for me, in fact, it's convenient and has worked very well on some pretty complex and highly dynamic forms.

Because each component receives just a slice of the form, it makes those components independently testable and (theoretically) easy for multiple engineers to work in parallel to develop a single logical form. 

- Create a form -- use services and function libraries to centralize form building, data extraction and validation.
- The top level FormGroup is placed in the top level component where your form tag lives
- Pass child FormGroup, FormArrays or FormControls to child components to form a tree of components that match your form structure
- Generally, map one form group, form array, or FormControl per child component.  The more you break it up, the smaller and lightweight the components will be
- Inherit components from BaseFormGroupComponent or BaseFormArrayComponent for easy access to utility functions and generalized form interactions / behavior
- Alternatively, use form helper functions directly or for special situations
