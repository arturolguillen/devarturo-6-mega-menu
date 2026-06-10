import Header from "@/components/Header";
import HeaderBrand from "@/components/HeaderBrand";
import HeaderHamburger from "@/components/HeaderHamburger";
import HeaderIcons from "@/components/HeaderIcons";

export default function Home() {
    return (
        <Header>
            <HeaderHamburger />
            <HeaderBrand />
            <HeaderIcons />
        </Header>
    );
}
