```javascript
document.addEventListener('DOMContentLoaded', (event) => {
    const filterSections = document.getElementById('filter-sections').children;

    for(let i = 0; i < filterSections.length; i++) {
        let sectionHeader = filterSections[i].firstElementChild;

        sectionHeader.addEventListener('click', function() {
            let sectionContent = this.nextElementSibling;
            if (sectionContent.style.maxHeight){
                sectionContent.style.maxHeight = null;
            } else {
                sectionContent.style.maxHeight = sectionContent.scrollHeight + "px";
            } 
        });
    }
});
```