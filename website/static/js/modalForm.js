```javascript
let User = {
    name: '',
    age: '',
    gender: '',
    spouse: {},
    dependents: []
};

function collectUserInformation() {
    let form = document.getElementById('modal-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        User.name = form.elements['name'].value;
        User.age = form.elements['age'].value;
        User.gender = form.elements['gender'].value;
        User.spouse = {
            name: form.elements['spouse-name'].value,
            age: form.elements['spouse-age'].value,
            gender: form.elements['spouse-gender'].value
        };
        let dependents = Array.from(form.elements['dependents']);
        dependents.forEach((dependent, index) => {
            User.dependents[index] = {
                name: dependent.elements['dependent-name'].value,
                age: dependent.elements['dependent-age'].value,
                gender: dependent.elements['dependent-gender'].value
            };
        });
    });
}

function addRemoveFormFields() {
    let addSpouseButton = document.getElementById('add-spouse');
    let removeSpouseButton = document.getElementById('remove-spouse');
    let addDependentButton = document.getElementById('add-dependent');
    let removeDependentButton = document.getElementById('remove-dependent');

    addSpouseButton.addEventListener('click', function() {
        let spouseFields = document.getElementById('spouse-fields');
        spouseFields.style.display = 'block';
    });

    removeSpouseButton.addEventListener('click', function() {
        let spouseFields = document.getElementById('spouse-fields');
        spouseFields.style.display = 'none';
    });

    addDependentButton.addEventListener('click', function() {
        let dependentFields = document.getElementById('dependent-fields');
        let clone = dependentFields.cloneNode(true);
        dependentFields.parentNode.appendChild(clone);
    });

    removeDependentButton.addEventListener('click', function() {
        let dependentFields = document.getElementById('dependent-fields');
        if (dependentFields.parentNode.childElementCount > 1) {
            dependentFields.parentNode.removeChild(dependentFields.parentNode.lastChild);
        }
    });
}

collectUserInformation();
addRemoveFormFields();
```