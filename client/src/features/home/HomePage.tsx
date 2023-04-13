import { Box, Grid, } from "@mui/material";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../app/store/configureStore";
import ProductCardSkeleton2 from "../catalog/ProductCardSkelato2";
import HomeCardBig from "./HomeCardBig";
import { Items } from "./items";




export default function HomePage() {
  
  const items = [ 
    {name: "ცემენტი", imageURL: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"},
    {name: "ცემენტი", imageURL: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"},
    {name: "ცემენტი", imageURL: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"},

  ]
  const { productsLoaded } = useAppSelector((state) => state.catalog);

    return (
      
      <Grid container spacing={4}>
      {items.map((item) => (
        <Grid item xs={3} >
          {!productsLoaded ? (
            <ProductCardSkeleton2 />
          ) : (
            <HomeCardBig {...items} />
          )}
        </Grid>
      ))}
    </Grid>
    )
}
 //{Array.from(Array(20)).map((_, index) => (      ))}