```javascript
function addRemoveFormFields(action, field) {
    const form = document.getElementById('modal-form');
    if (action === 'add') {
        const newField = document.createElement('input');
        newField.setAttribute('type', 'text');
        newField.setAttribute('name', field);
        form.appendChild(newField);
    } else if (action === 'remove') {
        const fieldToRemove = document.querySelector(`input[name=${field}]`);
        form.removeChild(fieldToRemove);
    }
}

document.getElementById('add-spouse').addEventListener('click', function() {
    addRemoveFormFields('add', 'spouse');
});

document.getElementById('remove-spouse').addEventListener('click', function() {
    addRemoveFormFields('remove', 'spouse');
});

document.getElementById('add-dependent').addEventListener('click', function() {
    addRemoveFormFields('add', 'dependent');
});

document.getElementById('remove-dependent').addEventListener('click', function() {
    addRemoveFormFields('remove', 'dependent');
});
```