import * as React from 'react';
import { useAlert } from 'react-alert';
import { addPrefixDependOnCategories } from '../../shared/HelperFunction';
import { SocialAccount } from './Interfaces';


interface Props {
    socialAccountsWithCategory: {
        category: string; socialAccounts: [SocialAccount]
    },
    isDailog: boolean
}
function SocialAccountsSquare(props: Props) {
    const { category, socialAccounts } = props.socialAccountsWithCategory;
    const { isDailog } = props

    const alert = useAlert()

    const copy = async (text: string) => {
        await navigator.clipboard.writeText(text);
        alert.success("copied to your clipboard");
    }



    if (isDailog) {
        return <div className="flex flex-row max:h-[50vh] w-[80vw] lg:max-h-[40vh]  lg:w-[50vh]   flex-wrap rounded-lg  justify-start items-start   overflow-scroll    ">
            {
                socialAccounts.map((socialAccount) => {
                    const url = addPrefixDependOnCategories(socialAccount.url, socialAccount.type);
                    if (socialAccount.category === "games") {
                        return <button onClick={() => copy(socialAccount.url)} key={socialAccount.id} className="flex flex-col justify-center items-center basis-1/3 lg:basis-1/4  ">
                            <img  className={"w-16 h-10"} src={"./images/" + socialAccount.type + ".svg"} alt="socialApp icon" />
                            <span className="text-sm lg:text-sm p-4 text-white">{socialAccount.label}</span>
                        </button>
                    } else {
                        return <a href={url} target="blank" key={socialAccount.id} className="flex flex-col justify-center items-center basis-1/3 lg:basis-1/4  ">
                            <img className={"w-16 h-16"} src={"./images/" + socialAccount.type + ".svg"} alt="socialApp icon" />
                            <span className="text-sm lg:text-sm p-4 text-white ">{socialAccount.label}</span>
                        </a>
                    }

                })
            }
        </div>
    } else {
        return <div className="flex flex-col  justify-center items-center w-full h-full gap-2  ">

            <div className="flex  overflow-scroll w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32  flex-wrap bg-gray-200  rounded-3xl   justify-start items-start p-2">
                {
                    socialAccounts.map((socialAccount) => <div className="basis-1/3 flex justify-center items-cesnter" key={socialAccount.id} > <img src={"./images/" + socialAccount.type + ".svg"} alt="socialApp icon" className="w-10 h-auto p-1" /></div>)
                }
            </div>

            <span className="text-xs  sm:text-sm md:text-lg    font-bold">{category}</span>
        </div>
    }


}

export default SocialAccountsSquare