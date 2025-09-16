//how it works section

const createAccount = document.getElementById("create-account-js");
const createWallet = document.getElementById("create-wallet-js");
const buyTradeCrypto = document.getElementById("buy-trade-js");

const infoPage = {
  infoOne: "Creating an account with cryptogenesis is easy! simply download the app from the App store or Google play store, tap 'sign-up', and follow the prompts to enter your email address, password, and other required information. Verify your email address and phone number, and you're ready to start exploring the world of cryptocurrency with cryptogenesis.",
  infoTwo: "To create a wallet with cryptogenesis simply log into your account, navigate to the 'wallets' section, and tap 'Create New Wallet'. Choose the cryptocurrency you want to store, follow the prompts to set up your wallet, and you're ready yo send, receive, and manage your crypto assets securely with cryptogenesis.",
  infoThree: "Ready to start buying and trading crypto? with cryptogenesis, it's easy! simply log in to your account, navigate to the 'buy' ot 'trade' section, select the cryptocurrency you're intrested in, enter the amount you want to buy or trade, and confirm your transaction. You can also set up recurring buys, explore market trends, and manage your portfolio all in one place. Get started today and take control."
};

const accountDiv = document.createElement("div");
accountDiv.textContent = infoPage.infoOne;
accountDiv.style.marginTop = "20px";
accountDiv. style.fontSize = "0.95em";
accountDiv. style.fontWeight = "bold";
accountDiv.style.color = "#ffffffff";

let accountExpanded = false;

createAccount.addEventListener("click", () => {
  accountExpanded = !accountExpanded;
  createAccount.style.paddingBottom = accountExpanded ? "20px" : "";
  if(accountExpanded){
    createAccount.appendChild(accountDiv);
  } else {
    if(createAccount.contains(accountDiv)){
      createAccount.removeChild(accountDiv);
    }
  }
});

const walletDiv = document.createElement("div");
walletDiv.textContent = infoPage.infoTwo;
walletDiv.style.marginTop = "20px";
walletDiv. style.fontSize = "0.95em";
walletDiv. style.fontWeight = "bold";
walletDiv.style.color = "#ffffffff";

let walletExpanded = false;

createWallet.addEventListener("click", () => {
  walletExpanded = !walletExpanded;
  createWallet.style.paddingBottom = walletExpanded ? "20px" : "";
  if(walletExpanded){
    createWallet.appendChild(walletDiv);
  } else {
    if(createWallet.contains(walletDiv)){
      createWallet.removeChild(walletDiv);
    }
  }
});

const buyTradeDiv = document.createElement("div");
buyTradeDiv.textContent = infoPage.infoThree;
buyTradeDiv.style.marginTop = "20px";
buyTradeDiv. style.fontSize = "0.95em";
buyTradeDiv. style.fontWeight = "bold";
buyTradeDiv.style.color = "#ffffffff";

let buyTradeExpanded = false;

buyTradeCrypto.addEventListener("click", () => {
  buyTradeExpanded = !buyTradeExpanded;
  buyTradeCrypto.style.paddingBottom = buyTradeExpanded ? "20px" : "";
  if(buyTradeExpanded){
    buyTradeCrypto.appendChild(buyTradeDiv);
  } else {
    if(buyTradeCrypto.contains(buyTradeDiv)){
      buyTradeCrypto.removeChild(buyTradeDiv);
    }
  }
});

//clients review section

const clientOne = document.getElementById("client-one");
const clientTwo = document.getElementById("client-two");
const clientThree = document.getElementById("client-three");
const clientReview = document.getElementById("clients-reviews");

const clientsReviews = {
  clientOneReview: {
    image: "images/client 6.jpg",
    name: "James Gun",
    job: "Cybersecurity Analyst",
    review: "Cryptogenesis has completely transformed my approach to investing. The platform is incredibly user-friendly, making it easy for me to buy, sell, and manage my cryptocurrency portfolio. The educational resources provided have helped me understand the market better, and the customer support team is always responsive and helpful. I've seen significant growth in my investments since I started using Cryptogenesis, and I couldn't be happier with my experience so far."
  },
  clientTwoReview: {
    image: "images/client 1.jpg",
    name: "Mercy Justine",
    job: "Data Scientist",
    review: "I love how Cryptogenesis makes crypto trading simple and secure. The intuitive interface and fast transactions give me confidence every time I use the app. Their regular updates and new features keep me excited about the future of digital assets. Highly recommended for anyone looking to get started with cryptocurrency!"
  },
  clientThreeReview: {
    image: "images/client 4.jpg",
    name: "Seun Adeola",
    job: "Blockchain Developer",
    review: "As someone new to crypto, I found Cryptogenesis incredibly welcoming. The step-by-step guides and helpful community made it easy to learn the basics and start investing. I appreciate the security features and the transparency of the platform. Cryptogenesis is my go-to choice for managing digital assets."
  }
};

function displayReview(clients) {
  clientReview.innerHTML = `
    <div class="flex justify-center items-center space-x-3">
      <img src="${clients.image}" alt="" class="h-20 w-20 rounded-full object-cover">
      <div>
        <h3 class="font-bold text-xl">${clients.name}</h3>
        <p class="font-bold text-sky-400">${clients.job}</p>
      </div>
    </div>

    <div class="font-bold text-xl">
      <p>${clients.review}</p>
    </div>
  `;
};

clientOne.addEventListener("click", () => {
  displayReview(clientsReviews.clientOneReview);
});

clientTwo.addEventListener("click", () => {
  displayReview(clientsReviews.clientTwoReview);
});

clientThree.addEventListener("click", () => {
  displayReview(clientsReviews.clientThreeReview);
});