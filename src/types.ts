export interface Food {
  name: string;
  locationID: number;
  category: string;
  quantity: number;
  wantedQuantity: number;
  unitPrice: number;
}

export interface FoodWithID extends Food {
  foodID: number;
}

export interface Location {
  id: number;
  name: string;
}
