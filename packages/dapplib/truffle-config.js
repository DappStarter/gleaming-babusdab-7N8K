require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess glimpse flame suspect notice crime remain equip give process suit segment'; 
let testAccounts = [
"0x6149581ba0c9f436e68dfee220518f1791c36d104a0aa6ac9121b736f0aa33d6",
"0xd2466e3730e8d54656b7d4e22e666746ff69cc57ca9ee0e8513e43ce1f95a2ee",
"0xe1b08cbe9fa84b7d6e583e8f5e02946376aeef2093ac97097f6eea16b0095443",
"0xe5e73dddc91a77ad59dcec0934b392e0161a7f6278ba897b7740909d095bc94a",
"0x77d5cb9a897f8073dff24945c4b4295e277107a29caad6a9249da8846d97877f",
"0x050421964b5cf3260941854f6140b15e00d793c7df2db9eff5a34d6e596322b4",
"0x483ee269af15cc5d537c7008b79c2776de73548d89c122f6742ce5479da376ed",
"0xf7e89744f0e418b7861327079530c0c4f716c31c0181407657a683916c962b0f",
"0xfafb6dd567eefbb6fc8cf7f0c57fdd55cc6a596f7077e8be710f86d0fbb8c8f5",
"0xf908bb666c8b8a943ce027c2d0f9fa79050d45844a312dcdff1048b666cb8440"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

