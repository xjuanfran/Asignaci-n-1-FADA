import { plot } from "nodeplotlib";

/**
 * @param {number} n
 * @return {number}
 * @description
 * This function calculates the n number of the fibbonacci sequence
 */
const fibbonacci = (n) => {
  if (n <= 1) return n;
  return fibbonacci(n - 1) + fibbonacci(n - 2);
};

// Params for the fibbonacci function, generates the first 3, 5, 7 and 10 numbers of the sequence
const params1 = [0, 1, 2, 3];
const params2 = [0, 1, 2, 3, 4];
const params3 = [0, 1, 2, 3, 4, 5, 6];
const params4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * @param {array} params
 * @return {array}
 * @description
 * Measure the time it takes to execute the function for the first 3 numbers of the fibonnaci sequence
*/
const time1 = params1.map((param) => {
  const start = performance.now();
  fibbonacci(param);
  const end = performance.now();
  return end - start;
});

// Measure the time it takes to execute the function for the first 5 numbers of the fibonnaci sequence
const time2 = params2.map((param) => {
  const start = performance.now();
  fibbonacci(param);
  const end = performance.now();
  return end - start;
});

// Measure the time it takes to execute the function for the first 7 numbers of the fibonnaci sequence
const time3 = params3.map((param) => {
  const start = performance.now();
  fibbonacci(param);
  const end = performance.now();
  return end - start;
});

// Measure the time it takes to execute the function for the first 10 numbers of the fibonnaci sequence
const time4 = params4.map((param) => {
  const start = performance.now();
  fibbonacci(param);
  const end = performance.now();
  return end - start;
});

const data = [
  {
    x: params1, // X axis
    y: time1, // Y axis
    type: "line", // Type of graph
    name: "Serie 1",
    marker: {
      color: "green",
    },
  },
  {
    x: params2,
    y: time2,
    type: "line",
    name: "Serie 2",
    marker: {
      color: "red",
    },
  },
  {
    x: params3,
    y: time3,
    type: "line",
    name: "Serie 3",
    marker: {
      color: "blue",
    },
  },
  {
    x: params4,
    y: time4,
    type: "line",
    name: "Serie 4",
    marker: {
      color: "purple",
    },
  },
];

const layout = {
  responsive: true,
  title:
    "Tiempo de ejecucion de la funcion fibbonacci (implentacion recursiva).",
  xaxis: {
    title: "n - Parametros de la funcion",
    dtick: 1,
  },
  yaxis: {
    title: "T(n) en milisegundos",
  },
};

plot(data, layout);
