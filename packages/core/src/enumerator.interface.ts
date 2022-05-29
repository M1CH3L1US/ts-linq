/**
 * An alternative implementation of the JavaScript
 * Iterable used by the IEnumerable implementation.
 */
export interface IEnumerator<T> extends Iterable<T> {
  /**
   * The current element in the sequence.
   */
  current: T | null;
  /**
   * Moves the enumerator to the next element in the sequence.
   */
  moveNext(): boolean;
  /**
   * Resets the enumerator to the beginning of the sequence.
   */
  reset(): void;
  /**
   * Returns the underlying iterator of the enumerator
   */
  getIterator(): Iterator<T>;
}
