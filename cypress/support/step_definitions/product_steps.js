import {Then} from "cypress-cucumber-preprocessor/steps";
import product from './steps/productPage'

Then(/^I click on the vintage tab$/, function () {
    product.clickVintage()
});

Then(/^I select the product from the vintage tab$/, function () {
   product.clickProduct()
});
Then(/^I click on add to basket button$/, function () {
    product.addToBasket()
});

Then(/^I click on the basket button$/, function () {
  product.clickBasketButton()
});
Then(/^I remove the product from the basket$/, function () {
  product.clickRemoveBasket()
});
Then(/^verify the product is being removed from the cart$/, function () {
  product.verifyProductCartRemoved()
});
