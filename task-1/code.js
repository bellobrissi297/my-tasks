function accum(s) {
    return s
      .trim()
      .split('')
      .map((a, b) =>
          a.toUpperCase() +
          a.toLowerCase().repeat(b)
      )
      .join("-");
}
