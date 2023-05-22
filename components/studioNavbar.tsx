import Link from "next/link"
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline"
import {ArrowPathIcon} from "@heroicons/react/24/outline"

const StudioNavbar = (props: any) => {
  return (
    <div>
        <div className="flex items-center justify-between p-5">
            <Link href="/" className="text-[#204E62] flex items-center">
                <ArrowUturnLeftIcon className="h-6 w-6 text-[#204E62] mr-2" />
                Go To Website
            </Link>
            <Link href="/studio" className="text-[#204E62] flex items-center" onClick={() => window.location.href = '/studio'}>
                <ArrowPathIcon className="h-6 w-6 text-[#204E62] mr-2"/>
                Refresh
            </Link>
        </div>
        <>{props.renderDefault(props)}</>
    </div>
  )
}

export default StudioNavbar