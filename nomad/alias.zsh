# Opens up temp files in Vim in $NOMAD_DIR. Helps to keep working directory clean
# and provides a home for temporary files that might be useful down the road
function nomad() {
    file=$1
    filename=${file%.*}
    extension=.${file##*.}
   
    # directory is based on current month and year
    year=$(date +%Y);
    month=$(date +%m);
    directory="$NOMAD_DIR"/"$year"/"$month"
   
    # create directory if it doesn't already exist
    if [ ! -d $directory ]; then
        mkdir -p $directory
    fi

    filepath="$directory"/"$file"

    # add suffix to file if a file with the same name already exists
    count=1
    while [ -f "$filepath" ]
    do
        suffix=_$count
        filepath="$directory"/"$filename""$suffix""$extension"
        count=$(($count + 1))
    done

    vim $filepath
}
