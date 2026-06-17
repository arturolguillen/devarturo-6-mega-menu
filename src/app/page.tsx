import FeaturedProduct from "@/components/FeaturedProduct";
import Header from "@/components/Header";
import HeaderBrand from "@/components/HeaderBrand";
import HeaderHamburger from "@/components/HeaderHamburger";
import HeaderIcons from "@/components/HeaderIcons";
import Hero from "@/components/Hero";
import HeroContent from "@/components/HeroContent";
import HeroFigure from "@/components/HeroFigure";
import Main from "@/components/Main";
import ProductBanner from "@/components/ProductBanner";
import ProductGrid from "@/components/ProductGrid";
import ProductList from "@/components/ProductList";
import Products from "@/components/Products";
import ProductsHeading from "@/components/ProductsHeading";
import NavigationProvider from "@/components/NavigationContext";
import SideNavigation from "@/components/SideNavigation";
import SideNavigationBody from "@/components/SideNavigationBody";
import SideNavigationFooter from "@/components/SideNavigationFooter";
import SideNavigationHeader from "@/components/SideNavigationHeader";
import SideNavigationMenu from "@/components/SideNavigationMenu";
import SideNavigationPreviewPanel from "@/components/SideNavigationPreviewPanel";

export default function Home() {
    return (
        <>
            <NavigationProvider>
                <Header>
                    <HeaderHamburger />
                    <HeaderBrand />
                    <HeaderIcons />
                </Header>
                <SideNavigation>
                    <SideNavigationBody>
                        <SideNavigationHeader />
                        <SideNavigationMenu />
                        <SideNavigationFooter />
                    </SideNavigationBody>
                    <SideNavigationPreviewPanel />
                </SideNavigation>
            </NavigationProvider>
            <Main>
                <Hero>
                    <HeroContent />
                    <HeroFigure />
                </Hero>
                <Products>
                    <ProductsHeading />
                    <ProductGrid>
                        <FeaturedProduct />
                        <ProductList />
                        <ProductBanner />
                    </ProductGrid>
                </Products>
            </Main>
        </>
    );
}
