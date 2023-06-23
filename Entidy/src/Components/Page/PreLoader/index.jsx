import images from "~/assets/images"
const PreLoader = () => {
        return (
                <div role="dialog" className="fixed top-0 right-0 left-0 z-50 h-modal overflow-y-auto overflow-x-hidden md:inset-0 md:h-full items-center justify-center flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80" >
                        <div className="absolute animate-spin rounded-full h-52 w-52 border-t-4 border-b-4  border-cyan-500" ></div>
                        <div className="w-44 h-44 bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url("${images.loading}")` }}></div>
                </div>
        )
}
export default PreLoader