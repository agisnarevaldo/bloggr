import {useState} from "react";
import {Icon} from "@iconify/react";

export default function ShareLinkButton() {
    const [copied, setCopied] = useState(false);
    function handleClick() {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    }

    return (
        <button
            onClick={handleClick}
            className="flex items-center gap-2 p-2 text-sm text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500"
        >
            <Icon icon="tabler:copy" />
            {copied ? "Copied!" : "Copy link"}
        </button>
    )
}