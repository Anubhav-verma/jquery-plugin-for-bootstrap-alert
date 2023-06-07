# jquery-plugin-for-bootstrap-alert

By using this plugin you can display a bootstrap alert in your web application with a fading effect.

To use this you have to call this function in the script section of your html file.
Include the .js file from this repository in your project.

 $('#alert-container').bootstrapAlert({
        type: 'success', // Optional, , default: 'info',  values: 'success', 'info', 'warning' or 'danger'
        heading:'Success',
        dismissible: true, // Optional, default: true 
        dismissibleTiming:3000,
        message: 'My message.',  // Required,
        clear: true // Optional, Clears the container, default: true 
    });
    
and need to create a div element like this

<div id="alert-container"></div>
