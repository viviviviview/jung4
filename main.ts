function clear () {
    OLED12864_I2C.showString(
    0,
    0,
    "    ",
    1
    )
    OLED12864_I2C.showString(
    0,
    1,
    "      ",
    1
    )
    OLED12864_I2C.showString(
    0,
    2,
    "       ",
    1
    )
    OLED12864_I2C.showString(
    0,
    3,
    "      ",
    1
    )
    OLED12864_I2C.showString(
    0,
    4,
    "      ",
    1
    )
    OLED12864_I2C.showString(
    0,
    5,
    "       ",
    1
    )
    OLED12864_I2C.showString(
    0,
    6,
    "     ",
    1
    )
    OLED12864_I2C.showString(
    0,
    7,
    "     ",
    1
    )
}
OLED12864_I2C.init(60)
clear()
basic.forever(function () {
    OLED12864_I2C.rect(
    54,
    25,
    55,
    30,
    1
    )
    OLED12864_I2C.rect(
    10,
    25,
    11,
    30,
    1
    )
    OLED12864_I2C.rect(
    31,
    34,
    34,
    35,
    1
    )
    OLED12864_I2C.rect(
    29,
    32,
    30,
    33,
    1
    )
    OLED12864_I2C.rect(
    35,
    32,
    36,
    33,
    1
    )
    OLED12864_I2C.rect(
    28,
    24,
    29,
    31,
    1
    )
    OLED12864_I2C.rect(
    36,
    24,
    37,
    31,
    1
    )
})
