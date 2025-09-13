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