/* -----------------------------------------
 * Hotspot Damage Increase Algorithm
 * -----------------------------------------
 * Author: Zajako aka James Covey
 * Email: zajako@gmail.com
 * -----------------------------------------
 * This requires a minimum range and maximum range (to be used to determine the hotspot) for it to maintain accuracy.
 * ----------------------------------------- */

/* -----------------------------------------
 * Diagram for showing purpose
 * -----------------------------------------
 *     Key:
 *         X = shooter
 *         Y = target
 *         H = hotspot
 *         [ = Minimum Range for bonus
 *         ] = Maximum Range for bonus
 *         - = One Step Away
 * ----------------------------------------- */

X - [ - - - H - - - ] - Y

/* -----------------------------------------
 * Pseudocode Code for Algorithm
 * -----------------------------------------
 *     Variables for Algorithm:
 *         D = Distance From Target in steps
 *         m = Minimum Range for bonus
 *         M = Maximum Range for bonus
 *         T = Total Points for Being at Hotspot
 *         O = Output Points
 * ----------------------------------------- */

// Determine Hotspot from Minimum and Maximum
H = (m + M) / 2

// Set O to 0 for distances outside of Max and Min
if(D <= m || D >= M)
	O = 0;
else
	O = ((Math.abs(Math.abs(D - H) - H) * T) / H)