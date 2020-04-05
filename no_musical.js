function noMusical(startClass, endClass, musicalFreq, schoolDuration) {
    var schoolYears = endClass - startClass;
    var musicalNb = Math.floor(schoolYears / musicalFreq);
    if (musicalFreq === 0) {
        return schoolYears + 1;
    }

    if (schoolDuration >= musicalFreq) {
        return 0;
    }

    return musicalNb * (musicalFreq - schoolDuration) + Math.min(schoolYears % musicalFreq, musicalFreq - schoolDuration);
}