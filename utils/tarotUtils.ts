const TAROT_CARDS = [
  // Major Arcana (0-23)
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/00_fool.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/01_magician.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/02_high_priestess.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/03_empress.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/04_emperor.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/05_hierophant.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/06_lovers.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/07_chariot.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/08_justice.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/09_hermit.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/10_wheel_of_fortune.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/11_strength.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/12_hanged_man.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/13_death.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/14_temperance.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/15_devil.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/16_tower.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/17_star.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/18_moon.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/19_sun.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/20_judgement.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/21_world.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/22_hero.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/23_white_card.png",
  
  // Wands (24-37)
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/wands_01_ace.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/wands_02_two.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/wands_03_three.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/wands_04_four.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/wands_05_five.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/wands_06_six.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/wands_07_seven.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/wands_08_eight.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/wands_09_nine.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/wands_10_ten.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/wands_11_page.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/wands_12_knight.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/wands_13_queen.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/wands_14_king.png",

  // Cups (38-51)
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/cups_01_ace.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/cups_02_two.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/cups_03_three.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/cups_04_four.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/cups_05_five.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/cups_06_six.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/cups_07_seven.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/cups_08_eight.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/cups_09_nine.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/cups_10_ten.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/cups_11_page.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/cups_12_knight.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/cups_13_queen.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/cups_14_king.png",

  // Swords (52-65)
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/swords_01_ace.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/swords_02_two.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/swords_03_three.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/swords_04_four.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/swords_05_five.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/swords_06_six.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/swords_07_seven.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/swords_08_eight.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/swords_09_nine.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/swords_10_ten.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/swords_11_page.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/swords_12_knight.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/swords_13_queen.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/swords_14_king.png",

  // Pentacles (66-79)
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/pentacles_01_ace.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/pentacles_02_two.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/pentacles_03_three.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/pentacles_04_four.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/pentacles_05_five.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/pentacles_06_six.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/pentacles_07_seven.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/pentacles_08_eight.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/pentacles_09_nine.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/pentacles_10_ten.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/pentacles_11_page.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/pentacles_12_knight.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/pentacles_13_queen.png",
  "https://cdn.jsdelivr.net/gh/marataitester-blip/tarot/pentacles_14_king.png"
];

export function getCardUrl(id: number): string {
  if (id < 0 || id >= TAROT_CARDS.length) {
    // Default fallback to Fool if out of bounds
    return TAROT_CARDS[0];
  }
  return TAROT_CARDS[id];
}
