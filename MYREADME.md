# reactnativedatepicker: 
* helps us select dates in our app.

* `<> </>` You can use it when you want to return multiple elements from a component but don't want to wrap them in an additional `View or div`.

* `const [date, setDate] = useState(new Date())`: This creates a state variable called `date` and a function `setDate` to update it. Initially, `date` is set to the current date.

* `const [open, setOpen] = useState(false)`: This creates another state variable called `open` and a function `setOpen` to update it. Initially, `open` is set to `false`.

* `return ( ... )`: This part defines what our app will display on the screen.

* `<Button title="Open" onPress={() => setOpen(true)} />`: This creates a button with the label "Open". When the button is pressed, it sets `open` to `true`, which means it will show the date picker.

# DatePicker Component:

* `modal`: Makes the date picker appear as a modal (a popup).
* `open={open}`: Controls whether the date picker is visible or not, based on the open state.
* `date={date}`: Sets the initial date to be shown in the date picker.
* `onConfirm={(date) => { setOpen(false); setDate(date); }}`: When a date is selected, it hides the date picker (`setOpen(false)`) and updates the `date` state with the new date (`setDate(date)`).
* `onCancel={() => { setOpen(false); }}`: If the date picker is canceled, it hides the date picker (`setOpen(false)`).