// ফর্ম সাবমিট করার ফাংশন
document.getElementById('cropForm').addEventListener('submit', function(event) {
    event.preventDefault(); // পেজ রিলোড বন্ধ করা

    // ফর্ম থেকে কৃষকের দেওয়া ডেটা সংগ্রহ করা
    const farmerName = document.getElementById('farmerName').value;
    const cropName = document.getElementById('cropName').value;
    const price = document.getElementById('price').value;
    const location = document.getElementById('location').value;
    const phone = document.getElementById('phone').value;

    // নতুন কার্ড তৈরি করা
    const marketGrid = document.getElementById('market-grid');
    const newCard = document.createElement('div');
    newCard.classList.add('crop-card');

    // কার্ডের ভেতরের এইচটিএমএল ডিজাইন
    newCard.innerHTML = `
        <h3>${cropName}</h3>
        <p class="price">৳ ${price} / কেজি</p>
        <hr>
        <p><strong>কৃষক:</strong> ${farmerName}</p>
        <p><strong>স্থান:</strong> ${location}</p>
        <p><strong>যোগাযোগ:</strong> ${phone}</p>
        <button class="btn-buy" onclick="alert('${farmerName} কে কল করা হচ্ছে: ${phone}')">কল করুন</button>
    `;

    // নতুন কার্ডটি বাজারের লিস্টে সবার প্রথমে যুক্ত করা
    marketGrid.insertBefore(newCard, marketGrid.firstChild);

    // সাকসেস মেসেজ দেখানো
    alert('অভিনন্দন! আপনার ফসল সফলভাবে বাজারে যুক্ত হয়েছে।');

    // ফর্মটি খালি করে দেওয়া
    document.getElementById('cropForm').reset();
});
