import BasePage from "./BasePage";

class OurProductsPage extends BasePage {
	visit() {
		cy.visit('http://www.webdriveruniversity.com/Page-Object-Model/products.html')
	}

	getCategories() {
		return cy.get('.thumbnail');
	}

	getSpecialOffersTile() {
		return cy.get('#container-special-offers');
	}

	getCamerasTile() {
		return cy.get('#container-product1');
	}

	getNewLaptopsTile() {
		return cy.get('#container-product2');
	}

	getUsedLaptopsTile() {
		return cy.get('#container-product3');
	}

	getGamesConsolesTile() {
		return cy.get('#container-product4');
	}

	getComponentsTile() {
		return cy.get('#container-product5');
	}

	getDesktopSystemsTile() {
		return cy.get('#container-product6');
	}

	getAudioTile() {
		return cy.get('#container-product7');
	}

	getSpecialOffersTitle() {
		this.getSpecialOffersTile().contains('Special Offers');
	}

	getCamerasTitle() {
		this.getCamerasTile().contains('Cameras');
	}

	getNewLaptopsTitle() {
		this.getNewLaptopsTile.contains('New Laptops');
	}

	getUsedLaptopsTitle() {
		this.getUsedLaptopsTile.contains('Used Laptops');
	}

	getGamesConsolesTitle() {
		this.getGamesConsolesTile.contains('Game Consoles');
	}

	getComponentsTitle() {
		this.getComponentsTile.contains('Components');
	}

	getDesktopSystemsTitle() {
		this.getDesktopSystemsTile.contains('Desktop Systems');
	}

	getAudioTitle() {
		this.getAudioTile.contains('Audio');
	}


	getSpecialOffersImg() {
		return cy.get('[src="../img/amp.svg"]');
	}

	getCamerasImg() {
		return cy.get('[src="../img/camera.svg"]');
	}

	getNewLaptopsImg() {
		return cy.get('[src="../img/laptop1.svg"]');
	}

	getUsedLaptopsImg() {
		return cy.get('[src="../img/laptop2.svg"]');
	}

	getGamesConsolesImg() {
		return cy.get('[src="../img/nintendo.svg"]');
	}

	getComponentsImg() {
		return cy.get('[src="../img/cards.svg"]');
	}

	getDesktopSystemsImg() {
		return cy.get('[src="../img/computer.svg"]');
	}

	getAudioImg() {
		return cy.get('[src="../img/boombox.svg"]');
	}

	getSpecialOfferModal() {
		return cy.get('.modal-content');
	}

	getProceedModalButton() {
		return cy.get('[data-dismiss="modal"]').contains('Proceed');
	}

	getCloseModalButton() {
		return cy.get('[data-dismiss="modal"]').contains('Close');
	}

	getExitModalButton() {
		return cy.get('[data-dismiss="modal"].close');
	}

	getTitles() {
		return cy.get('.sub-heading');
	}

	getImages() {
		return cy.get('.caption');
	}

	clickSpecialOffersTitle() {
		this.getSpecialOffersTitle().click();
	}

	clickCamerasTitle() {
		this.getCamerasTitle().click();
	}

	clickNewLaptopsTitle(){
		this.getNewLaptopsTitle().click();
	}

	clickUsedLaptopsTitle(){
		this.getUsedLaptopsTitle().click();
	}

	clickGameConsoleTitle(){
		this.getCamerasTitle().click();
	}

	clickComponentsTitle(){
		this.getComponentsTitle().click();
	}

	clickDesktopSystemsTitle(){
		this.getDesktopSystemsTitle().click();
	}

	clickAudioTitle(){
		this.getAudioTitle().click();
	}

	clickSpecialOffersImg() {
		this.getSpecialOffersImg().click();
	}

	clickCamerasImg() {
		this.getCamerasImg().click();
	}

	clickNewLaptopsImg(){
		this.getNewLaptopsTitle().click();
	}

	clickUsedLaptopsImg(){
		this.getUsedLaptopsImg().click();
	}

	clickGameConsoleImg(){
		this.getCamerasImg().click();
	}

	clickComponentsImg(){
		this.getComponentsImg().click();
	}

	clickDesktopSystemsImg(){
		this.getDesktopSystemsImg().click();
	}

	clickAudioImg(){
		this.getAudioImg().click();
	}

	clickProceedButton() {
		this.getProceedModalButton().click();
	}

	clickCloseModalButton() {
		this.getCloseModalButton().click();
	}

	clickExitModalButton() {
		this.getExitModalButton().click();
	}

	clickTitles(x) {
		this.getTitles().eq(x).click();
	}

	clickImages(x) {
		this.getImages().eq(x).click();
	}
}

export default OurProductsPage;