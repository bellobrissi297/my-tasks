function bouncingBall(h, bounce, window) {
    if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
        return -1;
    }
    else {
        let n = 1;
        let g = h * bounce;
        for (g; g > window; g *= bounce) {
            n += 2;
        }
        return n;
    }
}