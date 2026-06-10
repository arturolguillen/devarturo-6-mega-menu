import Link from "next/link";

export default function HeaderBrand() {
    return (
        <div className="absolute left-1/2 -translate-x-1/2">
            <Link href={'#'} className="text-2xl font-extrabold tracking-tight text-zinc-900">{'Stratos'}</Link>
        </div>
    );
}