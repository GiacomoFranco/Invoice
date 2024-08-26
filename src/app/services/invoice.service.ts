import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  constructor() {}

  materials = signal<any>([
    { name: 'Wood', price: 1, quantity: 2, total: 0 },
    { name: 'Package of Nails', price: 2, quantity: 1, total: 0 },
    { name: 'Drill', price: 4, quantity: 4, total: 0 },
  ]);

  parsedMaterials = computed<any>(() => {
    return this.materials().map((material: any) => {
      return { ...material, total: material.price * material.quantity };
    });
  });

  labors = signal<any>([
    { name: 'Construction of the table', price: 22, quantity: 1, total: 0 },
    { name: 'Repair of the chair', price: 22, quantity: 34, total: 0 },
  ]);

  parsedLabors = computed<any>(() => {
    return this.labors().map((labor: any) => {
      return { ...labor, total: labor.price * labor.quantity };
    });
  });

  totalSumatory = computed(() => {
    const materialsSumatory = this.parsedMaterials().reduce(
      (acc: any, item: any) => acc + item.total,
      0
    );
    const laborsSumatory = this.parsedLabors().reduce(
      (acc: any, item: any) => acc + item.total,
      0
    );
    return materialsSumatory + laborsSumatory;
  });

  discount = signal(10);
  totalCharge = signal(0);
}
