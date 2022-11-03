import { createFeatureSelector } from '@ngrx/store';
import { Cat } from '../shared/interfaces/Cat';

export const getCatsList = createFeatureSelector<Cat[]>('cats');
