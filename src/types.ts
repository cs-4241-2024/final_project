export interface Food {
  id: number;
  name: string;
  locationID: number;
  category: string;
  quantity: number;
  wantedQuantity: number;
  unitPrice: number;
}

export interface FoodWithLocationName extends Food {
  location: string;
}

export interface Location {
  id: number;
  name: string;
}
