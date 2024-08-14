import express from "express";
import {
  CacheRoutes,
  LoginRoutes,
  PostRoutes,
  UserRoutes,
} from "@routes/index";
import { logger, notFound } from "@middlewares/index";
const app = express();
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", UserRoutes);
app.use("/api/post", PostRoutes);
app.use("/api/account", LoginRoutes);
app.use("/api/cache", CacheRoutes);
app.use(notFound);
app.listen(3000, () => {
  console.log("express running...");
});

const isArraySpecial: (nums: number[], queries: number[][]) => boolean[] = (
  nums: number[],
  queries: number[][]
) => {
  const isSpecial: (arr: number[]) => boolean = (arr) => {
    const len = arr.length;
    let is = true;
    let i = 1;
    while (i <= len - 1 && is) {
      const right = arr[i - 1];
      const left = arr[i];
      is = !(right % 2 === left % 2);
      i++;
    }
    return is;
  };

  const cache: Map<number[], boolean> = new Map([]);
  const cover: (a1: number[], a2: number[]) => boolean = (a1, a2) => {
    const [x, y] = a1;
    const [n, m] = a2;
    console.log({ x, y, n, m });
    return false;
  };
  return queries.map(([from, to]) => {
    const target = nums.slice(from, to + 1);
    const s = isSpecial(target);
    for (const iterator of cache.keys()) {
      cover(iterator, [from, to]);
    }
    cache.set([from, to], s);
    console.log("/******/");
    return s;
  });
};
console.log(
  isArraySpecial(
    [4, 3, 1, 6, 3, 8],
    [
      [0, 3],
      [4, 5],
      [0, 5],
    ]
  )
);
