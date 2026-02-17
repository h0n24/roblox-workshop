# Roblox Workshop Codex (verze 2026-02-17)

> Cíl: jeden zdroj pravdy pro web (Next.js) + pro lektory. Jazyk pro děti (~9 let).

## Co z toho bude web

Web bude mít 2 hlavní stránky:

1) **Checklisty** pro **Úkol 1** a **Úkol 2** (základ + vylepšení). Dítě si odškrtává položky a sbírá body.
2) **Kódy (prefaby)**: dítě klikne „Kopírovat“, vidí barevné zvýraznění a po najetí myší dostane krátké vysvětlení. Dole je „přehrávač“, který ukáže kroky, jak kód vznikal.

## Jak pracujeme na workshopu (nové pravidlo)

- Každý student dělá **oba úkoly sám** (2× samostatná práce).
- V týmu/ve dvojici si dáváme **zpětnou vazbu** (playtest + 1 zlepšení).
- Lektor kontroluje: **na konci 1. hodiny** mini-výstup, a pak **prezentaci rodičům**.

## Kontrast: špatný vs dobrý přístup

### Špatně (často to svádí)
- Vysvětlovat všechno všem stejně dlouho.
- Dát jeden obří úkol bez volitelných částí.
- Nechat pokročilé děti „čekat“ a začátečníky „topit se“.

### Dobře (co funguje u smíšené skupiny)
- **Jeden společný základ** (všichni udělají minimum).
- **Volitelné rozšíření** pro pokročilé (aby se nenudili).
- **Rychlé checkpointy** (každých ~20–30 min playtest + malé zlepšení).
- „Prefab kódy“ jsou **kopírovatelné** a krátce vysvětlené.

## Checklisty (text + bodování)

Body jsou záměrně jednoduché. Děti chápou „+10 = velká věc“.

### Úkol 1 – Cesta za pokladem


| Sekce | Checklist položka | Body | Typ | id |
|---|---|---:|---|---|
| Proces (povinné, 0 bodů) | Ulož projekt (Ctrl+S) a pojmenuj ho tak, abys ho našel i zítra. | 0 | process | `t1-save` |
| Proces (povinné, 0 bodů) | Nech souseda projít tvoji cestu a řekni 1 věc, co je matoucí / těžké / super. | 0 | process | `t1-playtest-1` |
| Proces (povinné, 0 bodů) | Oprav aspoň 1 věc podle zpětné vazby (třeba sklon, mezera, viditelnost). | 0 | process | `t1-fix-1` |
| Základ (doporučeno stihnout) | Start: místo, kde se hráč objeví a má prostor se rozhlédnout. | 6 | base | `t1-start` |
| Základ (doporučeno stihnout) | Cesta: aspoň 6 překážek (skoky, úzké plošiny, schody, pohyblivá věc…). | 12 | base | `t1-path` |
| Základ (doporučeno stihnout) | Poklad/Finish: jasné místo na konci (místnost, pad, nápis). | 8 | base | `t1-finish` |
| Základ (doporučeno stihnout) | Hratelnost: zvládneš to projít celé bez „softlocku“ (nejde pokračovat). | 4 | base | `t1-playable` |
| Vylepšení (vyber si, co tě baví) | Tajná zkratka (pro šikovné hráče). | 4 | extra | `t1-shortcut` |
| Vylepšení (vyber si, co tě baví) | Falešná cesta (vede do pasti / slepé uličky). | 4 | extra | `t1-false` |
| Vylepšení (vyber si, co tě baví) | Téma + dekorace + „pokladní“ atmosféra (džungle, led, vesmír…). | 4 | extra | `t1-theme` |
| Vylepšení (vyber si, co tě baví) | Jedna mechanická překážka: pohyblivá plošina NEBO točící překážka. | 4 | extra | `t1-mechanic` |
| Vylepšení (vyber si, co tě baví) | Efekt: světlo NEBO zvuk NEBO dveře NEBO past. | 4 | extra | `t1-effect` |


### Úkol 2 – Temple Escape: Coins & Traps


| Sekce | Checklist položka | Body | Typ | id |
|---|---|---:|---|---|
| Proces (povinné, 0 bodů) | Ulož projekt (Ctrl+S) a pojmenuj ho (TempleEscape_Jmeno). | 0 | process | `t2-save` |
| Proces (povinné, 0 bodů) | Po 30 minutách si vyměň hru se sousedem a řekněte si 1 věc ke zlepšení. | 0 | process | `t2-playtest-1` |
| Proces (povinné, 0 bodů) | Oprav 1 věc podle zpětné vazby (jasný směr, bezpečný skok, checkpoint…). | 0 | process | `t2-fix-1` |
| Základ (povinné) | Start + Spawn: hráč se objeví na bezpečném místě. | 10 | base | `t2-start` |
| Základ (povinné) | Level 1: trvá cca 30–60 sekund (když jdeš normálně). | 10 | base | `t2-level` |
| Základ (povinné) | 10 coinů: dají se sebrat a počítají se. | 10 | base | `t2-coins` |
| Základ (povinné) | Past 1: zabijácká (když se dotkneš, umřeš). | 8 | base | `t2-kill` |
| Základ (povinné) | Past 2: mizící blok (zmizí a zase se vrátí). | 8 | base | `t2-disappear` |
| Základ (povinné) | Konec: finish + „Vyhrál jsi!“ moment (text/GUI). | 4 | base | `t2-win` |
| Vylepšení (tvoje volba) | Level 2: další část (delší hra). | 10 | extra | `t2-level2` |
| Vylepšení (tvoje volba) | Checkpointy: když spadneš, respawneš blíž. | 10 | extra | `t2-checkpoints` |
| Vylepšení (tvoje volba) | Blikající varování před zmizením / pastí. | 10 | extra | `t2-warning` |
| Vylepšení (tvoje volba) | Pohyblivá platforma (výtah nebo jezdící plošina). | 10 | extra | `t2-moving` |
| Vylepšení (tvoje volba) | Secret room: tajná místnost s odměnou (třeba 3 coiny). | 10 | extra | `t2-secret` |

## Data pro web (doporučený formát)

Hmm… tady jsou 3 možné cesty. Vyberu jednu.

1) **MD jako zdroj** a z něj při build-time generovat JSON (nejjednodušší editace pro lektory).
2) **Čisté JSON soubory** (`/data/checklists.json`, `/data/recipes.json`) (nejčistší pro dev).
3) **MDX** (kombinace textu a komponent) (nejhezcí UI, ale víc práce).

✅ Doporučení: **(2) JSON jako zdroj pravdy** + tento MD jako „lidská dokumentace“.

### JSON – checklisty

```json
{
  "task1": {
    "id": "ukol-1",
    "title": "Úkol 1 – Cesta za pokladem (Treasure Path)",
    "goal": "Postav cestu od Startu až k Pokladu. Cesta má aspoň 6 překážek.",
    "maxPoints": 50,
    "sections": [
      {
        "id": "t1-proces",
        "title": "Proces (povinné, 0 bodů)",
        "items": [
          {
            "id": "t1-save",
            "text": "Ulož projekt (Ctrl+S) a pojmenuj ho tak, abys ho našel i zítra.",
            "points": 0,
            "kind": "process"
          },
          {
            "id": "t1-playtest-1",
            "text": "Nech souseda projít tvoji cestu a řekni 1 věc, co je matoucí / těžké / super.",
            "points": 0,
            "kind": "process"
          },
          {
            "id": "t1-fix-1",
            "text": "Oprav aspoň 1 věc podle zpětné vazby (třeba sklon, mezera, viditelnost).",
            "points": 0,
            "kind": "process"
          }
        ]
      },
      {
        "id": "t1-zaklad",
        "title": "Základ (doporučeno stihnout)",
        "items": [
          {
            "id": "t1-start",
            "text": "Start: místo, kde se hráč objeví a má prostor se rozhlédnout.",
            "points": 6,
            "kind": "base"
          },
          {
            "id": "t1-path",
            "text": "Cesta: aspoň 6 překážek (skoky, úzké plošiny, schody, pohyblivá věc…).",
            "points": 12,
            "kind": "base"
          },
          {
            "id": "t1-finish",
            "text": "Poklad/Finish: jasné místo na konci (místnost, pad, nápis).",
            "points": 8,
            "kind": "base"
          },
          {
            "id": "t1-playable",
            "text": "Hratelnost: zvládneš to projít celé bez „softlocku“ (nejde pokračovat).",
            "points": 4,
            "kind": "base"
          }
        ]
      },
      {
        "id": "t1-vylepseni",
        "title": "Vylepšení (vyber si, co tě baví)",
        "items": [
          {
            "id": "t1-shortcut",
            "text": "Tajná zkratka (pro šikovné hráče).",
            "points": 4,
            "kind": "extra"
          },
          {
            "id": "t1-false",
            "text": "Falešná cesta (vede do pasti / slepé uličky).",
            "points": 4,
            "kind": "extra"
          },
          {
            "id": "t1-theme",
            "text": "Téma + dekorace + „pokladní“ atmosféra (džungle, led, vesmír…).",
            "points": 4,
            "kind": "extra"
          },
          {
            "id": "t1-mechanic",
            "text": "Jedna mechanická překážka: pohyblivá plošina NEBO točící překážka.",
            "points": 4,
            "kind": "extra"
          },
          {
            "id": "t1-effect",
            "text": "Efekt: světlo NEBO zvuk NEBO dveře NEBO past.",
            "points": 4,
            "kind": "extra"
          }
        ]
      }
    ]
  },
  "task2": {
    "id": "ukol-2",
    "title": "Úkol 2 – Temple Escape (Coins & Traps)",
    "goal": "Postav únikovou hru: cestu + mince + 2 pasti + jasné vítězství.",
    "maxPoints": 100,
    "sections": [
      {
        "id": "t2-proces",
        "title": "Proces (povinné, 0 bodů)",
        "items": [
          {
            "id": "t2-save",
            "text": "Ulož projekt (Ctrl+S) a pojmenuj ho (TempleEscape_Jmeno).",
            "points": 0,
            "kind": "process"
          },
          {
            "id": "t2-playtest-1",
            "text": "Po 30 minutách si vyměň hru se sousedem a řekněte si 1 věc ke zlepšení.",
            "points": 0,
            "kind": "process"
          },
          {
            "id": "t2-fix-1",
            "text": "Oprav 1 věc podle zpětné vazby (jasný směr, bezpečný skok, checkpoint…).",
            "points": 0,
            "kind": "process"
          }
        ]
      },
      {
        "id": "t2-zaklad",
        "title": "Základ (povinné)",
        "items": [
          {
            "id": "t2-start",
            "text": "Start + Spawn: hráč se objeví na bezpečném místě.",
            "points": 10,
            "kind": "base"
          },
          {
            "id": "t2-level",
            "text": "Level 1: trvá cca 30–60 sekund (když jdeš normálně).",
            "points": 10,
            "kind": "base"
          },
          {
            "id": "t2-coins",
            "text": "10 coinů: dají se sebrat a počítají se.",
            "points": 10,
            "kind": "base"
          },
          {
            "id": "t2-kill",
            "text": "Past 1: zabijácká (když se dotkneš, umřeš).",
            "points": 8,
            "kind": "base"
          },
          {
            "id": "t2-disappear",
            "text": "Past 2: mizící blok (zmizí a zase se vrátí).",
            "points": 8,
            "kind": "base"
          },
          {
            "id": "t2-win",
            "text": "Konec: finish + „Vyhrál jsi!“ moment (text/GUI).",
            "points": 4,
            "kind": "base"
          }
        ]
      },
      {
        "id": "t2-vylepseni",
        "title": "Vylepšení (tvoje volba)",
        "items": [
          {
            "id": "t2-level2",
            "text": "Level 2: další část (delší hra).",
            "points": 10,
            "kind": "extra"
          },
          {
            "id": "t2-checkpoints",
            "text": "Checkpointy: když spadneš, respawneš blíž.",
            "points": 10,
            "kind": "extra"
          },
          {
            "id": "t2-warning",
            "text": "Blikající varování před zmizením / pastí.",
            "points": 10,
            "kind": "extra"
          },
          {
            "id": "t2-moving",
            "text": "Pohyblivá platforma (výtah nebo jezdící plošina).",
            "points": 10,
            "kind": "extra"
          },
          {
            "id": "t2-secret",
            "text": "Secret room: tajná místnost s odměnou (třeba 3 coiny).",
            "points": 10,
            "kind": "extra"
          }
        ]
      }
    ]
  }
}
```
## Kódy (prefaby)

Každý prefab má:
- název + obtížnost
- kde se používá (Úkol 1 / Úkol 2 / bonus)
- finální kód

Pozn.: část kódů je vytažená z přiložených `.rbxl` souborů, část jsou **šablony** (template), protože je ve workshopu potřebujeme (coiny, checkpoint, win GUI).

### JSON – seznam prefabů (metadata)

```json
[
  {
    "id": "mizejiciblok",
    "source": "animace.rbxl",
    "scriptName": "MizejiciBlokScript",
    "title": "Mizící blok (on/off)",
    "difficulty": "lehké",
    "used_in": [
      "úkol-2",
      "úkol-1"
    ],
    "concepts": [
      "proměnná",
      "funkce",
      "cyklus while",
      "vlastnosti (Transparency, CanCollide)"
    ]
  },
  {
    "id": "postupnemizejiciblok",
    "source": "animace.rbxl",
    "scriptName": "PostupneMizejiciBlokScript",
    "title": "Postupně mizící blok (fade)",
    "difficulty": "lehké",
    "used_in": [
      "úkol-2"
    ],
    "concepts": [
      "for cyklus",
      "Transparency",
      "CanCollide",
      "wait"
    ]
  },
  {
    "id": "zabijhrace",
    "source": "animace.rbxl",
    "scriptName": "ZabijHraceScript",
    "title": "Zabijácký blok (kill brick)",
    "difficulty": "lehké",
    "used_in": [
      "úkol-2"
    ],
    "concepts": [
      "událost Touched",
      "Humanoid",
      "podmínka if"
    ]
  },
  {
    "id": "vytah",
    "source": "animace.rbxl",
    "scriptName": "VytahScript",
    "title": "Pohyblivá platforma / výtah",
    "difficulty": "střední",
    "used_in": [
      "úkol-2",
      "bonus"
    ],
    "concepts": [
      "for cyklus",
      "CFrame posun",
      "wait"
    ]
  },
  {
    "id": "rotace",
    "source": "animace.rbxl",
    "scriptName": "RotaceScript",
    "title": "Točící se překážka",
    "difficulty": "lehké",
    "used_in": [
      "úkol-1",
      "úkol-2",
      "bonus"
    ],
    "concepts": [
      "cyklus while",
      "CFrame rotace"
    ]
  },
  {
    "id": "jedovazona",
    "source": "animace.rbxl",
    "scriptName": "JedovaZonaScript",
    "title": "Jedová zóna (ubírá život postupně)",
    "difficulty": "střední",
    "used_in": [
      "úkol-2",
      "bonus"
    ],
    "concepts": [
      "Touched/TouchEnded",
      "while",
      "Humanoid.Health"
    ]
  },
  {
    "id": "lecivazona",
    "source": "animace.rbxl",
    "scriptName": "LecivaZonaScript",
    "title": "Léčivá zóna (přidává život postupně)",
    "difficulty": "střední",
    "used_in": [
      "bonus"
    ],
    "concepts": [
      "Touched/TouchEnded",
      "while",
      "Humanoid.Health"
    ]
  },
  {
    "id": "jedpripohybu",
    "source": "animace.rbxl",
    "scriptName": "JedPriPohybuScript",
    "title": "Past, co ubere 1 život (cooldown)",
    "difficulty": "lehké",
    "used_in": [
      "bonus"
    ],
    "concepts": [
      "wait",
      "Health - 1"
    ]
  },
  {
    "id": "desivytunel",
    "source": "animace.rbxl",
    "scriptName": "DesivyTunelScript",
    "title": "Strašidelný tunel (obrázek + posun)",
    "difficulty": "pokročilé",
    "used_in": [
      "bonus"
    ],
    "concepts": [
      "FindFirstChild",
      "for cyklus",
      "CFrame posun",
      "UI transparency"
    ]
  },
  {
    "id": "lightning",
    "source": "animace.rbxl",
    "scriptName": "LightningScript",
    "title": "Den/noc (ClockTime)",
    "difficulty": "pokročilé",
    "used_in": [
      "bonus"
    ],
    "concepts": [
      "Lighting service",
      "while",
      "if"
    ]
  },
  {
    "id": "puvodni",
    "source": "zebricek.rbxl",
    "scriptName": "PuvodniScript",
    "title": "Žebříček: leaderstats + body za čas (pokud je hráč 'živý')",
    "difficulty": "pokročilé",
    "used_in": [
      "bonus",
      "úkol-2"
    ],
    "concepts": [
      "Players service",
      "PlayerAdded",
      "Folder leaderstats",
      "IntValue",
      "while loop",
      "Attributes"
    ]
  },
  {
    "id": "bodyrychleji",
    "source": "zebricek.rbxl",
    "scriptName": "BodyRychlejiScript",
    "title": "Zóna, která přidává body navíc (Touch + TouchEnded)",
    "difficulty": "střední",
    "used_in": [
      "bonus"
    ],
    "concepts": [
      "Touched/TouchEnded",
      "while",
      "barva bloku",
      "práce se jménem hráče"
    ]
  },
  {
    "id": "leaderstats-coins",
    "source": "template",
    "scriptName": "LeaderstatsCoins",
    "title": "Žebříček: Coins v leaderstats (nutné pro coiny)",
    "difficulty": "střední",
    "used_in": [
      "úkol-2"
    ],
    "concepts": [
      "Players.PlayerAdded",
      "Folder leaderstats",
      "IntValue"
    ]
  },
  {
    "id": "coin-pickup",
    "source": "template",
    "scriptName": "CoinPickup",
    "title": "Coin: sebrání mince (přidá +1 do Coins)",
    "difficulty": "střední",
    "used_in": [
      "úkol-2"
    ],
    "concepts": [
      "Touched",
      "GetPlayerFromCharacter",
      "leaderstats",
      "debounce"
    ]
  },
  {
    "id": "checkpoint",
    "source": "template",
    "scriptName": "CheckpointRespawn",
    "title": "Checkpoint: respawn na posledním checkpointu",
    "difficulty": "pokročilé",
    "used_in": [
      "úkol-2"
    ],
    "concepts": [
      "SpawnLocation",
      "Player.RespawnLocation",
      "Touched"
    ]
  },
  {
    "id": "blink-warning",
    "source": "template",
    "scriptName": "BlinkWarning",
    "title": "Blikání: varovný blok (bliká před pastí)",
    "difficulty": "lehké",
    "used_in": [
      "úkol-2"
    ],
    "concepts": [
      "while",
      "wait",
      "Transparency"
    ]
  },
  {
    "id": "finish-win",
    "source": "template",
    "scriptName": "FinishWinGui",
    "title": "Finish: ukáže „Vyhrál jsi!“ (volitelně kontroluje Coins)",
    "difficulty": "pokročilé",
    "used_in": [
      "úkol-1",
      "úkol-2"
    ],
    "concepts": [
      "Touched",
      "PlayerGui",
      "ScreenGui",
      "TextLabel",
      "podmínka"
    ]
  }
]
```
### Prefaby – finální kódy

#### Mizící blok (on/off)
- id: `mizejiciblok`
- zdroj: **animace.rbxl**
- script: `MizejiciBlokScript`
- obtížnost: lehké
- používá se: úkol-2, úkol-1
- pojmy: proměnná, funkce, cyklus while, vlastnosti (Transparency, CanCollide)

```lua
local mizejiciBlok = script.Parent

local function zmizniBlok()
	mizejiciBlok.CanCollide = false
	mizejiciBlok.Transparency = 1
end

local function zobrazBlok()
	mizejiciBlok.CanCollide = true
	mizejiciBlok.Transparency = 0
end

while true do
	zmizniBlok()
	wait(1)
	zobrazBlok()
	wait(1)
end


--mizejiciBlok.AnchorPoint = Vector2.new(0, 0)
--mizejiciBlok.Position = UDim2.new(0.5, 0, 0, 0)

--script.Parent.CFrame = script.Parent.CFrame * CFrame.fromEulerAnglesXYZ(0.1,0,0)

--script.Parent.CFrame = script.Parent.CFrame * CFrame.new(0, 0, -0.3)
```

#### Postupně mizící blok (fade)
- id: `postupnemizejiciblok`
- zdroj: **animace.rbxl**
- script: `PostupneMizejiciBlokScript`
- obtížnost: lehké
- používá se: úkol-2
- pojmy: for cyklus, Transparency, CanCollide, wait

```lua
local blok = script.Parent

local function postupneZmizni()
	for count = 1, 10 do
		blok.Transparency = count / 10
		wait(0.1)
	end
	
	blok.CanCollide = false
	wait(3)
	
	blok.CanCollide = true
	blok.Transparency = 0
end

blok.Touched:Connect(postupneZmizni)
```

#### Zabijácký blok (kill brick)
- id: `zabijhrace`
- zdroj: **animace.rbxl**
- script: `ZabijHraceScript`
- obtížnost: lehké
- používá se: úkol-2
- pojmy: událost Touched, Humanoid, podmínka if

```lua
local function zabijHrace(castHrace)

	local najdiRodice = castHrace.Parent
	local clovek = najdiRodice:FindFirstChild("Humanoid")

	if clovek then
		clovek.Health = 0
	end

end

local past = script.Parent

past.Touched:Connect(zabijHrace)
```

#### Pohyblivá platforma / výtah
- id: `vytah`
- zdroj: **animace.rbxl**
- script: `VytahScript`
- obtížnost: střední
- používá se: úkol-2, bonus
- pojmy: for cyklus, CFrame posun, wait

```lua
local blok = script.Parent

local function jedNahoru()
	for i = 1, 50 do
		blok.CFrame = blok.CFrame * CFrame.new(0,0.3,0)
		wait(0.01)
	end
end

local function jedDolu()
	for i = 1, 50 do
		blok.CFrame = blok.CFrame * CFrame.new(0,-0.3,0)
		wait(0.01)
	end
end

while true do
	wait(1)
	jedNahoru()
	wait(1)
	jedDolu()
end
```

#### Točící se překážka
- id: `rotace`
- zdroj: **animace.rbxl**
- script: `RotaceScript`
- obtížnost: lehké
- používá se: úkol-1, úkol-2, bonus
- pojmy: cyklus while, CFrame rotace

```lua
local blok = script.Parent

while true do
	wait()
	blok.CFrame = blok.CFrame * CFrame.fromEulerAnglesXYZ(0.1,0,0)
end
```

#### Jedová zóna (ubírá život postupně)
- id: `jedovazona`
- zdroj: **animace.rbxl**
- script: `JedovaZonaScript`
- obtížnost: střední
- používá se: úkol-2, bonus
- pojmy: Touched/TouchEnded, while, Humanoid.Health

```lua
local zona = script.Parent
local jsemUvnitr = false

local function dmg(blok)
	local rodic = blok.Parent
	local clovek = rodic:FindFirstChild("Humanoid")
	if clovek then
		jsemUvnitr = true
		while jsemUvnitr do
			clovek.Health = clovek.Health - 2
			wait(0.3)
		end
	end
end

local function vylez()
	jsemUvnitr = false
end

zona.Touched:Connect(dmg)
zona.TouchEnded:Connect(vylez)
```

#### Léčivá zóna (přidává život postupně)
- id: `lecivazona`
- zdroj: **animace.rbxl**
- script: `LecivaZonaScript`
- obtížnost: střední
- používá se: bonus
- pojmy: Touched/TouchEnded, while, Humanoid.Health

```lua
local zona = script.Parent
local jsemUvnitr = false

local function heal(blok)
	local rodic = blok.Parent
	local clovek = rodic:FindFirstChild("Humanoid")
	if clovek then
		jsemUvnitr = true
		while jsemUvnitr do
			clovek.Health = clovek.Health + 2
			wait(0.3)
		end
	end
end

local function vylez()
	jsemUvnitr = false
end

zona.Touched:Connect(heal)
zona.TouchEnded:Connect(vylez)
```

#### Past, co ubere 1 život (cooldown)
- id: `jedpripohybu`
- zdroj: **animace.rbxl**
- script: `JedPriPohybuScript`
- obtížnost: lehké
- používá se: bonus
- pojmy: wait, Health - 1

```lua
local function uberZivot(castHrace)

	local najdiRodice = castHrace.Parent
	local clovek = najdiRodice:FindFirstChild("Humanoid")

	if clovek then
		clovek.Health = clovek.Health - 1
		wait(3)
	end

end

local past = script.Parent

past.Touched:Connect(uberZivot)
```

#### Strašidelný tunel (obrázek + posun)
- id: `desivytunel`
- zdroj: **animace.rbxl**
- script: `DesivyTunelScript`
- obtížnost: pokročilé
- používá se: bonus
- pojmy: FindFirstChild, for cyklus, CFrame posun, UI transparency

```lua
local baf = script.Parent.Parent:findFirstChild("Baf")
local bafObrazek = baf:findFirstChild("scary")

local function posouvejBaf()
	for i = 1, 30 do
		baf.CFrame = baf.CFrame * CFrame.new(0,0,-0.3)
		wait(0.001)
	end
end

local function zobrazBaf()
	bafObrazek.Transparency = 0
end

local function schovejBaf()
	bafObrazek.Transparency = 1
end

local function spustPoSlapnuti(castHrace)
	local rodic = castHrace.Parent
	local clovek = rodic:FindFirstChild("Humanoid")
	if clovek then
		zobrazBaf()
		posouvejBaf()
		schovejBaf()
	end
end

local zona = script.Parent
zona.Touched:Connect(spustPoSlapnuti)
```

#### Den/noc (ClockTime)
- id: `lightning`
- zdroj: **animace.rbxl**
- script: `LightningScript`
- obtížnost: pokročilé
- používá se: bonus
- pojmy: Lighting service, while, if

```lua
local cas = 0
local osvetleni = game:GetService("Lighting")

while true do
	cas = cas + 0.1
	if cas > 24 then
		cas = 0
	end

	osvetleni.ClockTime = cas
	wait(0.1)
end
```

#### Žebříček: leaderstats + body za čas (pokud je hráč 'živý')
- id: `puvodni`
- zdroj: **zebricek.rbxl**
- script: `PuvodniScript`
- obtížnost: pokročilé
- používá se: bonus, úkol-2
- pojmy: Players service, PlayerAdded, Folder leaderstats, IntValue, while loop, Attributes

```lua
--[[local hraci = game:GetService("Players")

local function hracSePridal(hrac)
	local zebricek = Instance.new("Folder")
	zebricek.Name = "Zebricek"
	zebricek.Parent = hrac
	
	local body = Instance.new("IntValue")
	body.Name = "Body"
	body.Value = 0
	body.Parent = zebricek
	
	while true do
		
		wait(1)
		local seznamHracu = hraci:GetPlayers()

		for iterujiHrace = 1, #seznamHracu do
			local hrac = seznamHracu[iterujiHrace]

			local body = hrac.Zebricek.Body			
			body.Value = body.Value + 1
			
			print(body.Value)
		end
	end
	
end

hraci.PlayerAdded:Connect(hracSePridal)
--]]



local Players = game:GetService("Players")

local function onCharacterAdded(character, player)
	player:SetAttribute("IsAlive", true)
	local humanoid = character:WaitForChild("Humanoid")
	humanoid.Died:Connect(function()
		local points = player.leaderstats.Points
		points.Value = 0
		player:SetAttribute("IsAlive", false)
	end)
end

local function onPlayerAdded(player)
	local leaderstats = Instance.new("Folder")
	leaderstats.Name = "leaderstats"
	leaderstats.Parent = player

	local points = Instance.new("IntValue")
	points.Name = "Points"
	points.Value = 0
	points.Parent = leaderstats

	player:SetAttribute("IsAlive", false)

	player.CharacterAdded:Connect(function(character)
		onCharacterAdded(character, player)
	end)
end

Players.PlayerAdded:Connect(onPlayerAdded)

while true do
	wait(1)
	local playerList = Players:GetPlayers()
	for i = 1, #playerList  do
		local player = playerList[i]
		if player:GetAttribute("IsAlive") then
			local points = player.leaderstats.Points
			points.Value = points.Value + 1
		end
	end
end
```

#### Zóna, která přidává body navíc (Touch + TouchEnded)
- id: `bodyrychleji`
- zdroj: **zebricek.rbxl**
- script: `BodyRychlejiScript`
- obtížnost: střední
- používá se: bonus
- pojmy: Touched/TouchEnded, while, barva bloku, práce se jménem hráče

```lua
-- nápady na zlepšení: synchronizovat čas přes tween service, ať to nepřidává body navíc za každou část těla, co se dotkla

local blok = script.Parent

local jsemUvnitr = false
blok.Color = Color3.new(1, .4, .2)

local function pridejBodyHraci(jmenoHrace)
	local hraci = game:GetService("Players")
	local seznamHracu = hraci:GetPlayers()

	for i = 1, #seznamHracu  do
		local hracZeSeznamu = seznamHracu[i]
		local jeToNasHrac = hracZeSeznamu.Name == jmenoHrace

		if jeToNasHrac then
			local body = hracZeSeznamu.leaderstats.Points
			body.Value = body.Value + 1
		end
	end
end

local function pridavejBodyNavic(castTelaCoSeDotkla)
	local celekTela = castTelaCoSeDotkla.Parent
	local jeToClovek = celekTela:FindFirstChild("Humanoid")
	
	if jeToClovek then
		jsemUvnitr = true
		blok.Color = Color3.new(.4, 1, .2)
		
		while jsemUvnitr do
			wait(1)
			local jmenoCloveka = celekTela.Name
			pridejBodyHraci(jmenoCloveka)
		end
	end
	
end

local function prestanPridavatBody()
	jsemUvnitr = false
	blok.Color = Color3.new(1, .4, .2)
end

blok.Touched:Connect(pridavejBodyNavic)
blok.TouchEnded:Connect(prestanPridavatBody)
```

#### Žebříček: Coins v leaderstats (nutné pro coiny)
- id: `leaderstats-coins`
- zdroj: **template**
- script: `LeaderstatsCoins`
- obtížnost: střední
- používá se: úkol-2
- pojmy: Players.PlayerAdded, Folder leaderstats, IntValue

```lua
local Players = game:GetService("Players")

local function onPlayerAdded(player)
	-- leaderstats = speciální složka, kterou Roblox ukáže v tabulce hráčů
	local leaderstats = Instance.new("Folder")
	leaderstats.Name = "leaderstats"
	leaderstats.Parent = player

	local coins = Instance.new("IntValue")
	coins.Name = "Coins"
	coins.Value = 0
	coins.Parent = leaderstats
end

Players.PlayerAdded:Connect(onPlayerAdded)
```

#### Coin: sebrání mince (přidá +1 do Coins)
- id: `coin-pickup`
- zdroj: **template**
- script: `CoinPickup`
- obtížnost: střední
- používá se: úkol-2
- pojmy: Touched, GetPlayerFromCharacter, leaderstats, debounce

```lua
local coin = script.Parent
local uzSebrane = false

local function onTouch(hit)
	if uzSebrane then return end

	local character = hit.Parent
	local humanoid = character:FindFirstChild("Humanoid")
	if not humanoid then return end

	local player = game.Players:GetPlayerFromCharacter(character)
	if not player then return end

	local leaderstats = player:FindFirstChild("leaderstats")
	if not leaderstats then return end

	local coins = leaderstats:FindFirstChild("Coins")
	if not coins then return end

	uzSebrane = true
	coins.Value = coins.Value + 1

	-- udělej minci „pryč“
	coin.Transparency = 1
	coin.CanCollide = false
	coin:Destroy()
end

coin.Touched:Connect(onTouch)
```

#### Checkpoint: respawn na posledním checkpointu
- id: `checkpoint`
- zdroj: **template**
- script: `CheckpointRespawn`
- obtížnost: pokročilé
- používá se: úkol-2
- pojmy: SpawnLocation, Player.RespawnLocation, Touched

```lua
-- Tento script dej DO SpawnLocation, který je checkpoint.
-- Tip: checkpointy pojmenuj třeba Checkpoint1, Checkpoint2...

local checkpoint = script.Parent -- SpawnLocation

local function onTouch(hit)
	local character = hit.Parent
	local humanoid = character:FindFirstChild("Humanoid")
	if not humanoid then return end

	local player = game.Players:GetPlayerFromCharacter(character)
	if not player then return end

	player.RespawnLocation = checkpoint
end

checkpoint.Touched:Connect(onTouch)
```

#### Blikání: varovný blok (bliká před pastí)
- id: `blink-warning`
- zdroj: **template**
- script: `BlinkWarning`
- obtížnost: lehké
- používá se: úkol-2
- pojmy: while, wait, Transparency

```lua
local blok = script.Parent

while true do
	blok.Transparency = 0
	wait(0.2)
	blok.Transparency = 0.7
	wait(0.2)
end
```

#### Finish: ukáže „Vyhrál jsi!“ (volitelně kontroluje Coins)
- id: `finish-win`
- zdroj: **template**
- script: `FinishWinGui`
- obtížnost: pokročilé
- používá se: úkol-1, úkol-2
- pojmy: Touched, PlayerGui, ScreenGui, TextLabel, podmínka

```lua
local finish = script.Parent
local potrebneCoiny = 10 -- změň na 0, pokud nechceš kontrolu coinů

local function showWin(player)
	local playerGui = player:WaitForChild("PlayerGui")
	if playerGui:FindFirstChild("WinGui") then return end

	local gui = Instance.new("ScreenGui")
	gui.Name = "WinGui"
	gui.ResetOnSpawn = false
	gui.Parent = playerGui

	local label = Instance.new("TextLabel")
	label.Size = UDim2.new(1, 0, 0.2, 0)
	label.Position = UDim2.new(0, 0, 0.4, 0)
	label.BackgroundTransparency = 1
	label.TextScaled = true
	label.Text = "Vyhrál jsi! 🎉"
	label.Parent = gui
end

local function onTouch(hit)
	local character = hit.Parent
	local humanoid = character:FindFirstChild("Humanoid")
	if not humanoid then return end

	local player = game.Players:GetPlayerFromCharacter(character)
	if not player then return end

	if potrebneCoiny > 0 then
		local leaderstats = player:FindFirstChild("leaderstats")
		local coins = leaderstats and leaderstats:FindFirstChild("Coins")
		if not coins or coins.Value < potrebneCoiny then
			return
		end
	end

	showWin(player)
end

finish.Touched:Connect(onTouch)
```

## Barevné vysvětlivky (tooltips pro děti)

Tady je slovníček pro hover popisky. Na webu:
- najdi token (slovo) v kódu
- obarvi ho podle typu
- na hover zobraz 1–2 věty

```json
{
  "local": "Vytvoř proměnnou. Proměnná je „krabička na hodnotu“.",
  "function": "Vytvoř funkci. Funkce je „kousek kódu“, který můžeš spustit znovu.",
  "if": "Rozhodni se. Když platí podmínka, udělej to uvnitř.",
  "then": "Začíná část, která se provede, když if platí.",
  "end": "Tímhle ukončíš if / function / cyklus.",
  "while": "Opakuj pořád dokola, dokud je podmínka pravda.",
  "for": "Opakuj daný početkrát.",
  "wait": "Počkej (sekundy).",
  ":Connect": "Napoj událost na funkci. Když se událost stane, funkce se spustí.",
  "Touched": "Událost: něco se dotklo bloku.",
  "TouchEnded": "Událost: něco přestalo být v kontaktu.",
  "Humanoid": "„Život“ postavy. Když měníš Health, ubíráš/přidáváš život.",
  "Transparency": "Průhlednost (0 = vidím, 1 = nevidím).",
  "CanCollide": "Kolize (true = můžeš stát na bloku, false = propadneš).",
  "CFrame": "Pozice + otočení v 3D (pohyb a rotace).",
  "Color3.new": "Barva (červená, zelená, modrá od 0 do 1).",
  "leaderstats": "Složka, kterou Roblox ukáže v tabulce hráčů.",
  "IntValue": "Číslo, které můžeš ukládat a zvyšovat (třeba Coins)."
}
```
## Přehrávač kroků (jak kód vzniká)

Dole pod kódem chceme „video bez videa“:
- krok má název
- co udělat v Roblox Studiu
- ukázku kódu v tom kroku
- zvýrazněné řádky, které se změnily

### JSON – kroky pro vybrané prefaby

```json
{
  "mizejici-blok": [
    {
      "id": "m1",
      "title": "Vytvoř Script v bloku",
      "what": "Vlož do bloku Script. Nic jiného zatím.",
      "code": "-- Script je uvnitř bloku\n",
      "focusLines": [
        1
      ]
    },
    {
      "id": "m2",
      "title": "Chyť si blok do proměnné",
      "what": "Napiš řádek, který si uloží blok do proměnné.",
      "code": "local mizejiciBlok = script.Parent\n",
      "focusLines": [
        1
      ]
    },
    {
      "id": "m3",
      "title": "Udělěj funkci, která blok schová",
      "what": "Přidej funkci zmizniBlok(): vypni kolizi a dej Transparency na 1.",
      "code": "local mizejiciBlok = script.Parent\n\nlocal function zmizniBlok()\n\tmizejiciBlok.CanCollide = false\n\tmizejiciBlok.Transparency = 1\nend\n",
      "focusLines": [
        3,
        4,
        5,
        6
      ]
    },
    {
      "id": "m4",
      "title": "Udělěj funkci, která blok ukáže",
      "what": "Přidej funkci zobrazBlok(): vrať kolizi a Transparency na 0.",
      "code": "local mizejiciBlok = script.Parent\n\nlocal function zmizniBlok()\n\tmizejiciBlok.CanCollide = false\n\tmizejiciBlok.Transparency = 1\nend\n\nlocal function zobrazBlok()\n\tmizejiciBlok.CanCollide = true\n\tmizejiciBlok.Transparency = 0\nend\n",
      "focusLines": [
        8,
        9,
        10,
        11
      ]
    },
    {
      "id": "m5",
      "title": "Opakuj to dokola",
      "what": "Přidej while true do, který střídá zmizniBlok a zobrazBlok.",
      "code": "local mizejiciBlok = script.Parent\n\nlocal function zmizniBlok()\n\tmizejiciBlok.CanCollide = false\n\tmizejiciBlok.Transparency = 1\nend\n\nlocal function zobrazBlok()\n\tmizejiciBlok.CanCollide = true\n\tmizejiciBlok.Transparency = 0\nend\n\nwhile true do\n\tzmizniBlok()\n\twait(1)\n\tzobrazBlok()\n\twait(1)\nend\n\n\n--mizejiciBlok.AnchorPoint = Vector2.new(0, 0)\n--mizejiciBlok.Position = UDim2.new(0.5, 0, 0, 0)\n\n--script.Parent.CFrame = script.Parent.CFrame * CFrame.fromEulerAnglesXYZ(0.1,0,0)\n\n--script.Parent.CFrame = script.Parent.CFrame * CFrame.new(0, 0, -0.3)\n",
      "focusLines": [
        13,
        14,
        15,
        16,
        17,
        18
      ]
    }
  ],
  "zabij-hrace": [
    {
      "id": "k1",
      "title": "Vytvoř Script v pasti",
      "what": "Vlož Script do bloku, který má zabíjet.",
      "code": "-- Script je uvnitř pasti\n",
      "focusLines": [
        1
      ]
    },
    {
      "id": "k2",
      "title": "Uděl funkci zabijHrace",
      "what": "Když se něco dotkne bloku, přijde sem 'hit'. Najdi Humanoid a nastav Health na 0.",
      "code": "local function zabijHrace(castHrace)\n\tlocal najdiRodice = castHrace.Parent\n\tlocal clovek = najdiRodice:FindFirstChild(\"Humanoid\")\n\tif clovek then\n\t\tclovek.Health = 0\n\tend\nend\n",
      "focusLines": [
        1,
        3,
        4,
        6,
        7,
        8,
        10
      ]
    },
    {
      "id": "k3",
      "title": "Napoj Touched na funkci",
      "what": "Získej past = script.Parent a napoj událost.",
      "code": "local function zabijHrace(castHrace)\n\n\tlocal najdiRodice = castHrace.Parent\n\tlocal clovek = najdiRodice:FindFirstChild(\"Humanoid\")\n\n\tif clovek then\n\t\tclovek.Health = 0\n\tend\n\nend\n\nlocal past = script.Parent\n\npast.Touched:Connect(zabijHrace)\n",
      "focusLines": [
        12,
        14
      ]
    }
  ],
  "coin-pickup": [
    {
      "id": "c1",
      "title": "Vytvoř Script v minci",
      "what": "Vlož Script do mince (Part).",
      "code": "-- Script je uvnitř mince\n",
      "focusLines": [
        1
      ]
    },
    {
      "id": "c2",
      "title": "Proměnná + debounce",
      "what": "Ulož coin a připrav uzSebrane, aby se mince nepřičetla 10×.",
      "code": "local coin = script.Parent\nlocal uzSebrane = false\n",
      "focusLines": [
        1,
        2
      ]
    },
    {
      "id": "c3",
      "title": "Najdi hráče a Coins",
      "what": "V onTouch ověř, že se dotkla postava (Humanoid), a najdi Coins v leaderstats.",
      "code": "local coin = script.Parent\nlocal uzSebrane = false\n\nlocal function onTouch(hit)\n\tif uzSebrane then return end\n\n\tlocal character = hit.Parent\n\tlocal humanoid = character:FindFirstChild(\"Humanoid\")\n\tif not humanoid then return end\n\n\tlocal player = game.Players:GetPlayerFromCharacter(character)\n\tif not player then return end\n\n\tlocal leaderstats = player:FindFirstChild(\"leaderstats\")\n\tif not leaderstats then return end\n\n\tlocal coins = leaderstats:FindFirstChild(\"Coins\")\n\tif not coins then return end\nend\n",
      "focusLines": [
        4,
        5,
        7,
        8,
        11,
        14,
        17,
        18
      ]
    },
    {
      "id": "c4",
      "title": "Přičti coin a minci smaž",
      "what": "Coins +1, udělej minci pryč, a připoj Touched.",
      "code": "local coin = script.Parent\nlocal uzSebrane = false\n\nlocal function onTouch(hit)\n\tif uzSebrane then return end\n\n\tlocal character = hit.Parent\n\tlocal humanoid = character:FindFirstChild(\"Humanoid\")\n\tif not humanoid then return end\n\n\tlocal player = game.Players:GetPlayerFromCharacter(character)\n\tif not player then return end\n\n\tlocal leaderstats = player:FindFirstChild(\"leaderstats\")\n\tif not leaderstats then return end\n\n\tlocal coins = leaderstats:FindFirstChild(\"Coins\")\n\tif not coins then return end\n\n\tuzSebrane = true\n\tcoins.Value = coins.Value + 1\n\n\t-- udělej minci „pryč“\n\tcoin.Transparency = 1\n\tcoin.CanCollide = false\n\tcoin:Destroy()\nend\n\ncoin.Touched:Connect(onTouch)\n\n",
      "focusLines": [
        20,
        21,
        24,
        25,
        26,
        29
      ]
    }
  ]
}
```
## Minimální UI návrh pro Next.js

- `/checklist` → přepínač Úkol 1 / Úkol 2
  - každá sekce má progress bar a počet bodů
  - checkbox + `+body` u každé položky
  - stav ukládej do `localStorage`

- `/kody` → grid s kartami prefabů (lehké / střední / pokročilé)
  - detail `/kody/[id]`: kód + Copy button + tooltips + přehrávač kroků


## Shrnutí pravidel z AGENTS.md (a jak je použít pro Next.js)

AGENTS.md popisuje obecné „repo pravidla“ (struktura, styl, testy, commity, žádné tajné klíče v git).  
My to jen přeložíme do Next.js světa:

- **Struktura**: drž data v `/data/` (checklisty, prefaby), UI v `/app/` nebo `/src/app/`, sdílené komponenty v `/components/`.
- **Pojmenování**: složky a soubory `kebab-case`, komponenty `PascalCase`, proměnné `camelCase`.
- **Bezpečnost**: žádné secrets do repa; když něco potřebuje `.env`, mít `.env.example`.
- **Dokumentace**: změny v datech prefabu/chcklistu piš i do `/docs/` (nebo aspoň do tohoto MD).

## Poznámky pro lektora (rychlé, praktické)

- Když je dítě zaseknuté: **dej mu 1 malý další krok**, ne řešení celé věci.
- Když je dítě moc rychlé: dej mu **vylepšení** (checkpointy, secret room, více pastí).
- Vždycky nech děti **testovat**: Play (F5) → oprav → znovu Play.
