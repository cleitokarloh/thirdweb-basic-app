
import { useAddress, useContract, useNFTBalance, useSDK, useNFT, USE } from "@thirdweb-dev/react";
import { ContractWithMetadata } from "@thirdweb-dev/sdk";
import type { NextPage } from "next";
import { use, useEffect, useState } from "react";



const Page2: NextPage = () => {
    const sdk = useSDK();

    

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const [ contracts, setContracts ] = useState<any>(null);

    const address = useAddress();
    


  

    // const {contract} = useContract('0x4c3D9876c93524a8c4a1242765b9419Db691be93')

    // const { data: ownerBalance, isLoading, error } = useNFTBalance(contract, address,0);

    // console.log(ownerBalance);
    // useEffect(()    => {
    //    async function load () {
    //     const balance = await sdk?.wallet.balance();
    //     // ERC20 token balance
    //     const erc20balance = await sdk?.wallet.balance(tokenContractAddress);
    //    }
    //    load();
    // }, [sdk.wallet]);

    const handleFunction = async () => {
        try {
            setLoading(true);
            const contractAddress = await sdk?.deployer.deployBuiltInContract('nft-drop',{
                name: "My Drop bolado",
                primary_sale_recipient: address!,
              });
              console.log(contractAddress);

              
        } catch(e) {

            setError(true);
            console.log(e);
        } finally{
            setLoading(false);
        }
    };



return(
<div style={{
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
}}> 

{loading && <p>loading...</p>}
    {!loading && <button style={{
        width: "100px",
        padding: "10px",
        background: '#e45',
        outline: 'none',
        border: 'none',
        borderRadius: '5px',
        color: '#fff',
        cursor: 'pointer',
        fontSize: '16px',
    }}
        onClick={handleFunction}
    >test</button>  
}
    {error && !loading && <p>oh boy, somethings not ok. :/</p>}

    <div>
        <p>address: {address}</p>

        <ul>
            {contracts && contracts.map( (contract: ContractWithMetadata) => {
                
                return (
                    <li key={contract.address}>{contract.address}</li>
                )
            })
            }
           
        </ul>
    </div>
    
</div>
);

}
export default Page2;