const blockchain = document.querySelector("#blockchain");
const addBlockBtn = document.querySelector("#addBlock");
let blockchainArray = [];

class Block {
  constructor(data) {
    this.index = blockchainArray.length + 1;
    this.timestamp = new Date();
    this.data = data;
    this.previousHash = blockchainArray.length
      ? blockchainArray[blockchainArray.length - 1].hash
      : "0";
    this.hash = this.calculateHash();
  }

  calculateHash() {
    return (
      this.index +
      this.timestamp +
      JSON.stringify(this.data) +
      this.previousHash
    ).toString();
  }
}

addBlockBtn.addEventListener("click", () => {
  const block = new Block("Some data");
  blockchainArray.push(block);
  renderBlockchain();
});

const renderBlockchain = () => {
  blockchain.innerHTML = "";
  blockchainArray.forEach(block => {
    const blockElement = document.createElement("div");
    blockElement.classList.add("block");
    blockElement.innerHTML = `
      <p>Index: ${block.index}</p>
      <p>Timestamp: ${block.timestamp}</p>
      <p>Data: ${block.data}</p>
      <p>Previous Hash: ${block.previousHash}</p>
      <p>Hash: ${block.hash}</p>
    `;
    blockchain.appendChild(blockElement);
  });
};
