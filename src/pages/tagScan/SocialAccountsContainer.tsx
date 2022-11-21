import * as React from 'react';
import { useAlert } from 'react-alert';
import DialogContainer from '../../healperComponent/tailwindComponent/Dialog';
import { addPrefixDependOnCategories } from '../../shared/HelperFunction';
import { Dialog, SocialAccount, UserInformation } from './Interfaces';
import SocialAccountsSquare from './SocialAccountsSquare';

interface Props {
    userInformation: UserInformation,
    squareScallTogle: { set: (id: number) => void; get: Dialog }
}



const aggregateSocialAccountsType = (socialAccounts: [SocialAccount]) => {
    const aggregatedSocialAccounts: { category: string, socialAccounts: [SocialAccount] }[] = []
    socialAccounts = socialAccounts?.sort((a, b) => a.category.localeCompare(b.category))
    let categoryCount = 0

    socialAccounts.forEach((socialAccount, index) => {
        if (index === 0) {
            aggregatedSocialAccounts[0] = { category: socialAccount.category, socialAccounts: [socialAccount] };
        } else if (socialAccount.category === socialAccounts[index - 1].category) {
            aggregatedSocialAccounts[categoryCount].socialAccounts.push(socialAccount)
        } else {
            aggregatedSocialAccounts.push({ category: socialAccount.category, socialAccounts: [socialAccount] });
            categoryCount++;
        }
    })
    return aggregatedSocialAccounts
}





function SocialAccountsContainer(props: Props) {
    const { userInformation, squareScallTogle } = props;
    const socialAccountsByCategory = aggregateSocialAccountsType(userInformation.socialAccounts)
    const popupSocialAccounts = socialAccountsByCategory[squareScallTogle.get.id]
    const alert = useAlert()
    const copy = async (text: string) => {
        await navigator.clipboard.writeText(text);
        alert.success("copied to your clipboard");
    }
    return <>
        {
            squareScallTogle.get.open && <DialogContainer onClose={() => { squareScallTogle.set(0) }} title={popupSocialAccounts.category}>
                < SocialAccountsSquare socialAccountsWithCategory={popupSocialAccounts} isDailog={true} />
            </DialogContainer>
        }
        <div className="flex flex-row  flex-[0.25] overflow-hidden  justify-center items-center bg-red-500 w-screen rounded-b-[100px]" >
            <div className="shadow-xl rounded-full border-4  border-x-red-600">
                {
                    userInformation.image ? <img alt="user image" src={userInformation.image} className="shadow-xl  rounded-full    border-none   h-32 w-32  lg:w-44  lg:h-44    object-cover" /> :
                        <svg className="border-none   h-1/6 w-auto object-fill	 text-gray-500 bg-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                }
            </div>
        </div>
        <div className="flex flex-col flex-[0.25] overflow-hidden  justify-center items-center   w-screen lg:pt-10  " >
            <div className="text-3xl lg:text-4xl font-mono font-bold  ">
                {userInformation.name}
            </div>

            <div className="flex flex-col justify-center items-center   overflow-hidden pt-5 lg:pt-20 sm:pt-10">
                {
                    <>
                        <a href={addPrefixDependOnCategories(userInformation.defaultAccount.url, userInformation.defaultAccount.type)} target="blank">
                            <img className={"w-20 h-20 "} src={"./images/" + userInformation.defaultAccount.type + ".svg"} alt="default Account" />
                        </a>
                        <span className="text-l lg:text-lg font-bold   sm:p-4">Default Account</span>
                    </>
                }
            </div>
        </div>

        <div className="flex flex-row text-lg   flex-[0.4] overflow-hidden    justify-center     items-center  lg:justify-center	   flex-wrap  w-screen pt-10 " >
            <>
                {
                    socialAccountsByCategory.map((socialAccounts, index) => <button
                        className=" basis-1/2  sm:basis-1/4 md:basis-1/5  lg:basis-1/6   "
                        key={socialAccounts.category}
                        onClick={(e) => { e.preventDefault(); squareScallTogle.set(index) }}
                    >
                        < SocialAccountsSquare socialAccountsWithCategory={socialAccounts} isDailog={false} />
                    </button>
                    )
                }
            </>
        </div>

        <div className="flex   flex-[0.1]  overflow-hidden  justify-center bg-red-500 w-screen rounded-t-[100px] items-center " >

        </div>

    </>
}

export default SocialAccountsContainer;