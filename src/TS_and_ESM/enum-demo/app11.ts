interface IncomingQuotesProductViewColumns {
  productName: string;
  yourCurrentPrice: string;
  highestPriceBySupplier: string;
  lowestPriceBySupplier: string;
}

interface IncomingQuotesSupplierViewColumns {
  supplierName: string;
  noOfProductsQuoted: string;
  totalQuotedPrice: string;
  dateReceived: string;
}

enum RFQStatus {
  IN_PROGRESS = "IN_PROGRESS",
  REQUIRES_APPROVAL = "REQUIRES_APPROVAL",
  AWAITING_SUBMISSIONS = "AWAITING_SUBMISSIONS",
  SELECTED = "SELECTED",
  AWARDED = "AWARDED",
  PUBLISHED = "PUBLISHED",
}

enum IncomingQuotesSwitchMode {
  PRODUCT = "Product view",
  SUPPLIER = "Supplier view",
}

type T1<T extends IncomingQuotesSwitchMode> =
  T extends IncomingQuotesSwitchMode.PRODUCT
    ? IncomingQuotesProductViewColumns
    : IncomingQuotesSupplierViewColumns;

const typeGuard = <T>(
  incomingQuotesViewMode: any
): incomingQuotesViewMode is T => {
  return incomingQuotesViewMode in incomingQuotesViewMode;
};

function test(incomingQuotesViewMode: IncomingQuotesSwitchMode) {
  if (typeGuard<IncomingQuotesSwitchMode.PRODUCT>(incomingQuotesViewMode)) {
    type T2 = T1<typeof incomingQuotesViewMode>;

    const kk: T2 = {
      lowestPriceBySupplier: ",",
      highestPriceBySupplier: "",
      productName: "",
      yourCurrentPrice: "",
    };
  } else {
    type T2 = T1<typeof incomingQuotesViewMode>;
  }
}

export {};
