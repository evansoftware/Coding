function removeDuplicates(xs){
    return IntStream.of(xs).distinct().toArray();
}