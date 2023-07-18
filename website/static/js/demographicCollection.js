```javascript
let User = {
    name: "",
    age: "",
    gender: "",
    spouse: "",
    dependents: []
};

function collectUserInformation() {
    let form = document.getElementById('modal-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        User.name = form.elements['name'].value;
        User.age = form.elements['age'].value;
        User.gender = form.elements['gender'].value;
        User.spouse = form.elements['spouse'].value;
        let dependents = form.elements['dependents'].value;
        User.dependents = dependents.split(',');
        limitProductSelection(User);
    });
}

function limitProductSelection(user) {
    let age = parseInt(user.age);
    let gender = user.gender;
    let spouse = user.spouse;
    let dependents = user.dependents;

    products = products.filter(function(product) {
        if (product.minAge <= age && product.maxAge >= age) {
            if (product.gender.includes(gender)) {
                if (product.spouse === spouse) {
                    if (product.dependents.length === dependents.length) {
                        return true;
                    }
                }
            }
        }
        return false;
    });
}
```