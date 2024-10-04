export interface Food {
  id: number;
  name: string;
  locationID: number;
  category: string;
  quantity: number;
  wantedQuantity: number;
  unitPrice: number;
}

export interface Location {
  id: number;
  name: string;
}
