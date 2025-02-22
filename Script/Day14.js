// Change Background Color
document.getElementById('colorBtn').addEventListener('click', function() {
    document.body.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
});

// Modal Popup
document.getElementById('showModal').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'block';
    document.getElementById('modalOverlay').style.display = 'block';
});
document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('modalOverlay').style.display = 'none';
});

// Add Items Dynamically
document.getElementById('addItem').addEventListener('click', function() {
    let listItem = document.createElement('li');
    listItem.textContent = 'New Item';
    document.getElementById('itemList').appendChild(listItem);
});

// Form Validation
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    if (name.trim() === '') {
        document.getElementById('error').textContent = 'Name cannot be empty';
    } else {
        document.getElementById('error').textContent = '';
        alert('Form submitted successfully!');
    }
});

// Additional Event Listeners
document.getElementById('colorBtn').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'lightgray';
});
document.getElementById('colorBtn').addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
});
document.addEventListener('keydown', function(event) {
    console.log('Key Pressed:', event.key);
});
