const addGroup = function () {


}

function showContent(groupId) {
    // Hide all content sections
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.classList.remove('active');
    });

    // Show the selected content section
    const selectedContent = document.getElementById(groupId);
    selectedContent.classList.add('active');
}

window.onload = async function (){

    // Add event listeners for each button
    document.getElementById('btnGroup1').addEventListener('click', function() {
        showContent('group1');
    });
    document.getElementById('btnGroup2').addEventListener('click', function() {
        showContent('group2');
    });
    document.getElementById('btnGroup3').addEventListener('click', function() {
        showContent('group3');
    });
    document.getElementById('btnAddGroup').addEventListener('click', function() {
        showContent('addGroup');
    });
}