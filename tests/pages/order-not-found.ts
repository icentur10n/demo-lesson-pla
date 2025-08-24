import { Page } from '@playwright/test'
import { AuthorizedPage } from './authorized-page'
import type { Locator } from '@playwright/test'

export class OrderNotFound extends AuthorizedPage {
  readonly orderNotFoundTitle: Locator
  readonly orderNotFoundMessage: Locator
  readonly orderNotFoundImage: Locator

  constructor(page: Page) {
    super(page)
    this.orderNotFoundTitle = page.locator('.not-found__title')
    this.orderNotFoundMessage = page.locator('.not-found__description')
    this.orderNotFoundImage = page.locator('.not-found__image')
  }
}
