// console.log('JPEG.TXT.JS');

quality = 50;

function replace_with_prob(txt, searchval, replaceval, prob)
{
	index = 0;
	index = txt.indexOf(searchval);
	while (index < txt.length && index > 0)
	{
		if (Math.random() < (prob + (quality/100.0 - 0.5)) )
			txt = txt.substr(0, index) + replaceval + txt.substr(index + searchval.length);
		index = txt.indexOf(searchval, index + 1);
	}
	return txt;
}

function get_rid_of_repeats(txt, prob)
{
    index = 1;
    while (index < txt.length)
    {
        if (txt[index - 1] == txt[index] && Math.random() < (prob + (quality/100.0 - 0.5)) )
            txt = txt.substr(0, index - 1) + txt.substr(index);
        else
            index++;
    }
	return txt;
}

function do_make_jpeg_plz(txt)
{
    txt = txt.toLowerCase();
	txt = txt.split(" ");
	txt = txt.join(" ");
	txt = get_rid_of_repeats(txt, 0.8);
	
    txt = replace_with_prob(txt, "ing ", "in' ", 0.7);

    txt = replace_with_prob(txt, "first", "1st", 0.9);
    txt = replace_with_prob(txt, "second", "2nd", 0.9);
    txt = replace_with_prob(txt, "third", "3rd", 0.9);
    txt = replace_with_prob(txt, "fourth", "4th", 0.9);
    txt = replace_with_prob(txt, "fifth", "5th", 0.9);
    txt = replace_with_prob(txt, "sixth", "6th", 0.9);
    txt = replace_with_prob(txt, "seventh", "7th", 0.9);
    txt = replace_with_prob(txt, "eight", "8th", 0.9);
    txt = replace_with_prob(txt, "ninth", "9th", 0.9);
    txt = replace_with_prob(txt, "tenth", "10th", 0.9);

	txt = replace_with_prob(txt, "er", "r", 0.3);
	txt = replace_with_prob(txt, "er", "a", 0.3);
	txt = replace_with_prob(txt, "ed ", "'d ", 0.3);
    txt = replace_with_prob(txt, "pro", "bro", 0.4);
    txt = replace_with_prob(txt, "with", "w", 0.8);
    txt = replace_with_prob(txt, "and", "&", 0.8);

	txt = replace_with_prob(txt, " ", " ;) ", 0.05);
	txt = replace_with_prob(txt, "!", "!?", 0.8);
	txt = replace_with_prob(txt, "?", "!?", 0.8);

	txt = replace_with_prob(txt, "ate", "8", 0.8);
    txt = replace_with_prob(txt, "i", "1", 0.5);
	txt = replace_with_prob(txt, "e", "3", 0.2);
	txt = replace_with_prob(txt, "a", "4", 0.05);
    txt = replace_with_prob(txt, "o", "0", 0.2);

    txt = replace_with_prob(txt, " ", "", 0.1);
    txt = replace_with_prob(txt, " ", "-", 0.05);
    txt = replace_with_prob(txt, "'", "", 1.0);
    
	
	return txt;
}

console.log(do_make_jpeg_plz("Lost Luggage is an action video game developed and released in 1982 for the Atari 2600 by Texas-based studio Games by Apollo. The player controls skycaps working at an airport and tries to collect pieces of luggage that fall overhead from a frantic luggage carousel. A two-player mode, in which the second player controls the direction the luggage falls, is also available. Programmer Ed Salvo was inspired to make Lost Luggage when he was waiting for his luggage at the Dallas/Fort Worth International Airport, and the game took around four weeks to make. A four-minute advertising jingle was recorded for the game but never used. Reviewers criticized the game's similarity to the Activision game Kaboom!, believing Lost Luggage to be an inferior clone. Soon after Lost Luggage '​s release, Apollo filed for bankruptcy and closed."));

// if (process.argv.length > 2)
// 	txt = process.argv[2];
// 	jpeg_txt = do_make_jpeg_plz(txt);
// 	console.log(jpeg_txt);
