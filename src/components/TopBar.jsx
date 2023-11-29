import notifIcon from '../../public/notif_icon.svg'
import searchIcon from '../../public/search_icon.svg'

export default function(props) {
    return (
        <>
            <div className="flex flex-col w-full px-7 py-5">
                <div className="h-auto w-full flex flex-row justify-between mt-7">
                    <div className='flex flex-col gap-y-1 cursor-pointer'>
                        <div className="w-4 h-1 bg-white"></div>
                        <div className="w-7 h-1 bg-white"></div>
                    </div>
                        <div className='flex flex-row gap-x-6'>
                            <img src={notifIcon} />
                            <img src={searchIcon} />
                        </div>
                </div>
                <div className='flex justify-start my-5'>
                    <h2 className='text-3xl font-bold'>Hey, {props.name}!</h2>
                </div>
            </div>
        </>
    )
}