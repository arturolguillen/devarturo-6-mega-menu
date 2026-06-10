import Header from "@/components/Header";
import HeaderBrand from "@/components/HeaderBrand";
import HeaderHamburger from "@/components/HeaderHamburger";
import HeaderIcons from "@/components/HeaderIcons";
import Hero from "@/components/Hero";
import HeroContent from "@/components/HeroContent";
import HeroFigure from "@/components/HeroFigure";
import Main from "@/components/Main";

export default function Home() {
    return (
        <>
            <Header>
                <HeaderHamburger />
                <HeaderBrand />
                <HeaderIcons />
            </Header>
            <Main>
                <Hero>
                    <HeroContent />
                    <HeroFigure />
                </Hero>
            </Main>
        </>
    );
}
