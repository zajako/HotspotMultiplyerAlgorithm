# Hotspot Damage Increase Algorithm
By James Covey (zajako@gmail.com)

## Descripton

This is a sudo code algorithm for giving more points/ for being closer to a hotspot in the center of 2 points.

## Diagram to demonstrate purpose

* X = Shooter of arrow or whatever
* Y = Target being hit
* H = Hotspot or where target should be for maximum value
* \- = One unit of distance
* [ = Minimum range for bonus to apply
* ] = Maximum range for bonus to apply

### Example:

``` X - [ - - - H - - - ] - Y ```

In this example  the range is 2 - 7 steps, which makes the hotspot 4.5.

## Sudo Code for Algorithm

```
/* -----------------------------------------
 * Hotspot Damage Increase Algorithm
 * -----------------------------------------
 *     Variables:
 *         D = Distance From Target in steps
 *         m = Minimum Range for bonus
 *         M = Maximum Range for bonus
 *         T = Total Points for Being at Hotspot
 *         O = Output Points
 * ----------------------------------------- */

# Determine Hotspot from Minimum and Maximum
H = (m + M) / 2

# Set O to 0 for distances outside of Max and Min
if(D <= m || D >= M)
	O = 0;
else
	O = ((abs(Math.abs(D - H) - H) * T) / H)
```