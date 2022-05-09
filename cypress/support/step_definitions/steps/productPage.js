import LoginPage from "./loginPage"
const click_vintage= 'a[href*="vintage?ref=vintage_nav_promo"]'
const product='img[alt*="Vintage Rug"]'
const add_to_basket="div[data-selector='add-to-cart-button'] button"
const basket_button="span[class='wt-icon'] path[d*='M21']"
const remove_basket="a[rel*='remove']"
const remove_cart_message="h1[class*='wt-text-heading-01 wt-pt-xs-2 wt-pb-xs-2']"
class ProductPage{

    static clickVintage(){
       cy.get(click_vintage).click()
    }
    static clickProduct() {
        cy.get(product).first().click({force: true})
    }
    static addToBasket(){
        cy.get(add_to_basket).click()
    }

    static clickBasketButton() {
        cy.get(basket_button).click()
    }

    static clickRemoveBasket() {
        cy.get(remove_basket).click()
    }

    static verifyProductCartRemoved() {
        cy.get(remove_cart_message).should('contain.text', 'Your basket is empty')
    }
}
export default  ProductPage
