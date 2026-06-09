import {
  createCellPrototype,
  type CellBuilder,
  type CellPrototype,
} from "@sellify/common-ui-components/adaptive-view/AdaptiveCell";

type Product = {
  title: string;
  price: number;
};

type CurrencyCellBuilderProps = {
  amount: number;
};

describe("createCellPrototype", () => {
  const product: Product = {
    title: "Ring",
    price: 123.45,
  };

  const createCurrencyCellPrototype = (
    buildView: CellBuilder<CurrencyCellBuilderProps>["buildView"],
    dataAdapter: (row: Product) => CurrencyCellBuilderProps,
  ): CellPrototype<Product> =>
    createCellPrototype("Price", { buildView }, dataAdapter);

  it("creates a prototype with the supplied title", () => {
    const cellPrototype = createCurrencyCellPrototype(
      ({ amount }) => amount,
      ({ price }) => ({ amount: price }),
    );

    expect(cellPrototype.title).toBe("Price");
  });

  it("adapts the complete row before passing props to the cell builder", () => {
    const dataAdapter = jest.fn(({ price }: Product) => ({ amount: price }));
    const buildView = jest.fn(({ amount }: CurrencyCellBuilderProps) => amount);
    const cellPrototype = createCurrencyCellPrototype(buildView, dataAdapter);

    cellPrototype.buildView(product);

    expect(dataAdapter).toHaveBeenCalledTimes(1);
    expect(dataAdapter).toHaveBeenCalledWith(product);
    expect(buildView).toHaveBeenCalledTimes(1);
    expect(buildView).toHaveBeenCalledWith({ amount: product.price });
    expect(dataAdapter.mock.invocationCallOrder[0]).toBeLessThan(
      buildView.mock.invocationCallOrder[0] as number,
    );
  });

  it("returns the cell builder output", () => {
    const renderedCell = "formatted price";
    const cellPrototype = createCurrencyCellPrototype(
      () => renderedCell,
      ({ price }) => ({ amount: price }),
    );

    expect(cellPrototype.buildView(product)).toBe(renderedCell);
  });

  it("adapts each row passed to the prototype build function", () => {
    const dataAdapter = jest.fn(({ price }: Product) => ({ amount: price }));
    const buildView = jest.fn(({ amount }: CurrencyCellBuilderProps) => amount);
    const cellPrototype = createCurrencyCellPrototype(buildView, dataAdapter);
    const secondProduct: Product = {
      title: "Bracelet",
      price: 67.89,
    };

    cellPrototype.buildView(product);
    cellPrototype.buildView(secondProduct);

    expect(dataAdapter).toHaveBeenNthCalledWith(1, product);
    expect(dataAdapter).toHaveBeenNthCalledWith(2, secondProduct);
    expect(buildView).toHaveBeenNthCalledWith(1, { amount: product.price });
    expect(buildView).toHaveBeenNthCalledWith(2, {
      amount: secondProduct.price,
    });
  });
});
